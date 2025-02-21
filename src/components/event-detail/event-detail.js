import Image from "next/image";

export default function EventDetail(props) {
  const { title, image, description, date, location } = props;

  return (
    <>
      <div className="p-8">
        {/* <img
          src={image}
          alt={title}
          className="w-full h-[480px] object-cover object-center border"
        /> */}
        <Image
          src={image}
          alt={title}
          width={1200}
          height={480}
          priority={true}
          className="w-full h-[480px] object-cover object-center border"
        />
        <div className="bg-gray-50 flex p-8 w-full border mt-8">
          <div className="bg-gray-100 p-4 border w-8/12">
            <h2 className="text-3xl font-extrabold">{title}</h2>
            <p className="mt-4">{description}</p>
          </div>
          <div className="bg-gray-100 border ml-8 p-8 w-4/12 font-bold">
            <time className="text-2xl">{date}</time>
            <address>{location}</address>
          </div>
        </div>
      </div>
    </>
  );
}
