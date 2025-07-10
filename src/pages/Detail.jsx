import { Link, useOutletContext, useParams } from "react-router-dom"
import PageWrapper from "../components/PageWrapper/PageWrapper";
import PrimaryHeading from "../components/Heading/PrimaryHeading";
import { Button, Rating, RatingStar } from "flowbite-react";
import { ROUTES } from "../const";


export default function Detail() {
  const { id } = useParams();
  const { reviews } = useOutletContext();

  const review = reviews.find((r) => r.id === id);

  if (!review) return <p>レビューが見つかりません。</p>;

  return (
    <PageWrapper>
      {review.image ?
        (<div className="max-w-xl mb-5"><img src={review.image} alt={review.title} /></div>) : ("")
      }
      <PrimaryHeading mb="mb-3">
        {review.title}
      </PrimaryHeading>
      <p className="mb-5">{review.artist}</p>
      <div className="tags mb-5">
        <ul className="tags-list">
          {Array.isArray(review.tags) && review.tags.length > 0 ?
            review.tags.map((tag, index) => {
              return (<li className="inline-block mr-2 text-sm" key={`tag-${index}`}>
                <Link className="border border-gray-500 text-gray-900 bg-white rounded-full px-3 py-1 block hover:bg-gray-800 hover:text-white" to={`${ROUTES.TAG}${encodeURIComponent(tag)}`}>{tag}</Link>
              </li>)
            }) : null
          }
        </ul>
      </div>
      <div className="mt-5">
        <Rating>
          {[1, 2, 3, 4, 5].map((i) => {
            return <RatingStar key={`rating-${i}`} filled={i <= review.rating} />
          })}
        </Rating>
      </div>
      <p className="mt-5 mb-5">{review.review}</p>

      <Button type="button" color="blue" onClick={() => history.back()}>
        戻る
      </Button>
    </PageWrapper>
  )
}