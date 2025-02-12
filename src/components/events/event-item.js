import Link from "next/link";

import LocationIcon from "../icons/location-icon";

export default function EventItem(props) {
  const { image, title, date, location, id } = props;

  const formattedTime = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className="bg-gray-100 h-96 md:h-72 flex flex-col md:flex-row mt-12 overflow-hidden border">
      <div className="h-[320px] md:h-full md:w-5/12 lg:w-2/5 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-125 duration-200" />
      </div>
      <div className="m-4 flex flex-col justify-between md:w-7/12 lg:w-3/5">
        <h2 className="text-4xl font-bold text-black">{title}</h2>
        <div className="flex justify-between items-end">
          <div>
            <div>
              <time className="text-md font-bold text-black">
                {formattedTime}
              </time>
            </div>
            <div className="flex items-center">
                <LocationIcon />
              <address className="text-sm">{formattedAddress}</address>
            </div>
          </div>
          <div className="bg-white py-1 px-2 btn">
            <Link href={exploreLink}>Explore Event</Link>
          </div>
        </div>
      </div>
    </li>
  );
}
