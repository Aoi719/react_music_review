import { useOutletContext, useParams } from "react-router-dom"
import PageWrapper from "../components/PageWrapper/PageWrapper";
import PrimaryHeading from "../components/Heading/PrimaryHeading";
import { Button } from "flowbite-react";


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
              return <li className="inline-block mr-2 border border-gary-500 text-gary-500 px-3 py-1 rounded-full text-sm" key={`tag-${index}`}>{tag}</li>
            }) : null
          }
        </ul>
      </div>
      <p className="mb-5">{review.review}</p>

      <Button type="button" color="blue" onClick={() => history.back()}>
        戻る
      </Button>
    </PageWrapper>
  )
}
