import { useRouter } from "next/router";

import { getAllEvents } from "../../../dummy-data";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";

export default function AllEventsPage() {
  const events = getAllEvents();
  
  const router = useRouter();

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
