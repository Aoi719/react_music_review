import { Card, Button } from "flowbite-react";
import { ROUTES } from "../../const";
import { Link } from "react-router-dom";

export default function ReviewCard({ title, artist, image, children, onDelete, onEdit, id, tags }) {
  return (
    <Card className="md:w-full md:max-w-none font-sans" horizontal imgSrc={image} imgAlt={title}>
      <Link to={`${ROUTES.DETAIL}${id}`}>
        <h5 className="text-3xl font-bold text-white">
          {title}
        </h5>
        <p className=" text-xl font-normal text-white">
          {artist}
        </p>
        <div className="tags">
          <ul className="tags-list mt-5 ">
            {Array.isArray(tags) && tags.length > 0 ?
              tags.map((tag, index) => {
                return <li className="inline-block mr-2 border border-white text-white px-3 py-1 rounded-full text-sm" key={`tag-${index}`}>{tag}</li>
              }) : null
            }
          </ul>
        </div>
        <div className="mt-7 text-white whitespace-pre-line">{children}</div>
      </Link>


      <div className="flex mt-4">
        {/* 編集ボタン */}
        {onEdit && (
          <Button color="blue" className="editButton" onClick={onEdit}>編集</Button>
        )}
        {/* 削除ボタン */}
        {onDelete && (
          <Button color="red" className="deleteButton" onClick={onDelete}>削除</Button>
        )}
      </div>
    </Card>
  )
}
