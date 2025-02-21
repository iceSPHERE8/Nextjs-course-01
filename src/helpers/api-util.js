export async function getAllEvents() {
  const response = await fetch(
    "https://react-nextjs-test-1cdf1-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured === true);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.id === id)[0];
}

export async function getFilteredEvents(searchParam) {
  const { year, month } = searchParam;

  const allEvents = await getAllEvents();

  return allEvents.filter((event) => {
    const date = new Date(event.date);
    return date.getFullYear() === year && date.getMonth() + 1 === month;
  })
}