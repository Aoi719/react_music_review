import { Card } from "flowbite-react";

export default function ReviewCard({ title, artist, image, children }) {
  return (
    <Card className="md:w-full md:max-w-none font-sans" horizontal imgSrc={image} imgAlt={title}>
      <h5 className="text-3xl font-bold text-white">
        {title}
      </h5>
      <p className=" text-xl font-normal text-white">
        {artist}
      </p>
      <div className="mt-7 text-white">{children}</div>
    </Card>
  )
}
