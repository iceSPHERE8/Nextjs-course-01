import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy-data";

import EventList from "@/components/events/event-list";

export default function FilteredEventsPage() {
  const router = useRouter();
  const path = router.query.slug;

  if (!path) {
    return <p>Loading...</p>;
  }

  const filteredYear = +path[0];
  const filteredMonth = +path[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredMonth > 12
  ) {
    return <p>Invalid parameter, Please choose again!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if(!filteredEvents || filteredEvents.length === 0){
    return <p>No events found!</p>
  }

  return (
    <div>
        <p>Found {filteredEvents.length} {filteredEvents.length > 1 ? 'events' : 'event'}</p>
      <EventList items={filteredEvents} />
    </div>
  );
}
