import EventItem from "./event-item";

export default function EventList(props) {
  const { items } = props;

  return (
    <div className="flex justify-center">
      <ul className="w-11/12 md:w-8/12 2xl:w-4/12">
        {items.map((event) => (
          <EventItem
            key={event.id}
            image={event.image}
            title={event.title}
            date={event.date}
            location={event.location}
            id={event.id}
          />
        ))}
      </ul>
    </div>
  );
}
