import { useRouter } from "next/router";
import useSWR from "swr";
import { useEffect, useState } from "react";

import { getFilteredEvents } from "@/helpers/api-util";

import EventList from "@/components/events/event-list";

export default function FilteredEventsPage() {
  const [loadedEvents, setLoadedEvents] = useState([]);

  const router = useRouter();
  const path = router.query.slug;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://react-nextjs-test-1cdf1-default-rtdb.firebaseio.com/events.json",
    fetcher
  );

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }

      setLoadedEvents(events);
    }
  }, [data]);

  if (!path || !loadedEvents) {
    return <p>Loading...</p>;
  }

  const filteredYear = +path[0];
  const filteredMonth = +path[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredMonth > 12 ||
    error
  ) {
    return <p>Invalid parameter, Please choose again!</p>;
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const date = new Date(event.date);
    return (
      date.getFullYear() === filteredYear &&
      date.getMonth() + 1 === filteredMonth
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found!</p>;
  }

  return (
    <div>
      <p>
        Found {filteredEvents.length}{" "}
        {filteredEvents.length > 1 ? "events" : "event"}
      </p>
      <EventList items={filteredEvents} />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const path = params.slug;

//   const filteredYear = +path[0];
//   const filteredMonth = +path[1];

//   if (
//     isNaN(filteredYear) ||
//     isNaN(filteredMonth) ||
//     filteredYear > 2030 ||
//     filteredMonth > 12
//   ) {
//     return {
//       props: {
//         hasError: true,
//       },
//     };
//   }

//   const filteredEvents = await getFilteredEvents({
//     year: filteredYear,
//     month: filteredMonth,
//   });

//   return {
//     props: {
//       events: filteredEvents,
//     },
//   };
// }
