import { useRouter } from "next/router";

import { getAllEvents } from "@/helpers/api-util";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";

export default function AllEventsPage(props) {
  const router = useRouter();
  const events = props.events;

  const filterEventsHandler = (year, month) => {
    const fullPath = `./events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSearch={filterEventsHandler} />
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  
  return {
    props: {
      events: events
    },
    revalidate: 60
  }
}
