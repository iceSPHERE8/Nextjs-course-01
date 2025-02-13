import { useRouter } from "next/router";

import { getEventById } from "../../../dummy-data";
import EventDetail from "@/components/event-detail/event-detail";

export default function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <EventDetail
      title={event.title}
      image={event.image}
      description={event.description}
      date={event.date}
      location={event.location}
    />
  );
}
