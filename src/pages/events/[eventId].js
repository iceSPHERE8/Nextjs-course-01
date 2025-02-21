import { getEventById, getFeaturedEvents } from "@/helpers/api-util";
import EventDetail from "@/components/event-detail/event-detail";

export default function EventDetailPage(props) {
  const event = props.event;

  if (!event) {
    return <p className="mx-auto">Loading...</p>;
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

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      event: event,
    },
    revalidate: 60
  };
}

export async function getStaticPaths() {
  const allEvents = await getFeaturedEvents();

  const allPaths = allEvents.map((event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths: allPaths,
    fallback: true,
  };
}
