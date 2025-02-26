import { getEventById, getFeaturedEvents } from "@/helpers/api-util";
import EventDetail from "@/components/event-detail/event-detail";
import Comments from "@/components/comments/comments";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";

export default function EventDetailPage(props) {
  const router = useRouter();
  const path = router.query;
  const [allComments, setAllComments] = useState(props.comments);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     fetch(`http://localhost:3000/api/comments/${path.eventId}`)
  //       .then((res) => res.json())
  //       .then((data) => setAllComments(data.comments));
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, []);

  const event = props.event;

  // setInterval(() => {
  //   console.log(props.comments)
  // }, 1000)

  if (!event) {
    return <p className="mx-auto">Loading...</p>;
  }

  return (
    <>
      <EventDetail
        title={event.title}
        image={event.image}
        description={event.description}
        date={event.date}
        location={event.location}
      />
      <Comments comments={allComments} />
    </>
  );
}

// export async function getStaticProps(context) {
//   const eventId = context.params.eventId;

//   const event = await getEventById(eventId);

//   return {
//     props: {
//       event: event,
//     },
//     revalidate: 60,
//   };
// }

// export async function getStaticPaths() {
//   const allEvents = await getFeaturedEvents();

//   const allPaths = allEvents.map((event) => ({
//     params: { eventId: event.id },
//   }));

//   return {
//     paths: allPaths,
//     fallback: true,
//   };
// }

export async function getServerSideProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  try {
    const res = await fetch(`http://localhost:3000/api/comments/${eventId}`);
    const data = await res.json();
    console.log(data);
    return {
      props: {
        event: event,
        comments: data.comments,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        event: event,
        comments: [],
      },
    };
  }
}
