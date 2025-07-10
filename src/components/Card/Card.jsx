import { Card, Button, Rating, RatingStar } from "flowbite-react";
import { ROUTES } from "../../const";
import { Link } from "react-router-dom";

export default function ReviewCard({ title, artist, image, children, onDelete, onEdit, id, tags, rating = 0 }) {
  return (
    <Card className="md:w-full md:max-w-none font-sans" horizontal imgSrc={image} imgAlt={title}>
      <Link to={`${ROUTES.DETAIL}${id}`}>
        <h5 className="text-3xl font-bold text-white">
          {title}
        </h5>
        <p className=" text-xl font-normal text-white">
          {artist}
        </p>
      </Link>
      <div className="tags">
        <ul className="tags-list">
          {Array.isArray(tags) && tags.length > 0 ?
            tags.map((tag, index) => {
              return (
                <li className="inline-block mr-2 text-sm" key={`tag-${index}`}>
                  <Link className="border border-white text-white rounded-full px-3 py-1 block hover:bg-white hover:text-gray-900" to={`${ROUTES.TAG}${encodeURIComponent(tag)}`}>{tag}</Link>
                </li>
              )
            }) : null
          }
        </ul>
      </div>
      <Link to={`${ROUTES.DETAIL}${id}`}>
        <div>
          <Rating>
            {[1, 2, 3, 4, 5].map((i) => {
              return <RatingStar key={`rating-${i}`} filled={i <= rating} />
            })}
          </Rating>
        </div>
        <div className="mt-3 text-white whitespace-pre-line">{children}</div>
      </Link>
      <div className="flex mt-5">
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
