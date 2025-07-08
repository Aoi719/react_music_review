import { Card, Button } from "flowbite-react";

export default function ReviewCard({ title, artist, image, children, onDelete }) {
  return (
    <Card className="md:w-full md:max-w-none font-sans" horizontal imgSrc={image} imgAlt={title} imgClassName="w-64 h-64 object-cover">
      <h5 className="text-3xl font-bold text-white">
        {title}
      </h5>
      <p className=" text-xl font-normal text-white">
        {artist}
      </p>
      <div className="mt-7 text-white">{children}</div>

      {/* 削除ボタン */}
      {onDelete && (
        <div className="flex mt-4">
          <Button color="blue" className="editButton">編集</Button>
          <Button color="red" className="deleteButton" onClick={onDelete}>削除</Button>
        </div>
      )}
    </Card>
  )
}
