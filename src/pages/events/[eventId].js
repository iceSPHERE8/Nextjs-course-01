import { useRouter} from "next/router";

import { getEventById } from "../../../dummy-data";

export default function EventDetailPage() {
    const router = useRouter()
    const eventId = router.query.eventId

    const event = getEventById(eventId)
    console.log(event)

  return (
    <div>
      <h1>event detail</h1>
    </div>
  );
}
