import Head from "next/head.js";

import { getFeaturedEvents } from "@/helpers/api-util.js";
import EventList from "../components/events/event-list.js";

export default function HomePage(props) {

  return (
    <>
      <Head>
        <title>NextJS-Course</title>
        <meta name="description" content="Some descrption about this web page." />
      </Head>
      <div>
        <EventList items={props.events} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props:{
      events: featuredEvents
    },
    revalidate: 600
  }
}
