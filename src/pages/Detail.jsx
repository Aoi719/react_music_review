import { useOutletContext, useParams } from "react-router-dom"
import PageWrapper from "../components/PageWrapper/PageWrapper";
import PrimaryHeading from "../components/Heading/PrimaryHeading";

export default function Detail() {
  const { id } = useParams();
  const { reviews } = useOutletContext();

  const review = reviews.find((r) => r.id === id);

  if (!review) return <p>レビューが見つかりません。</p>;

  return (
    <PageWrapper>
      {review.image === true ?
        (<img src={review.image} alt={review.title} />) : ("")
      }
      <PrimaryHeading>
        {review.title}
      </PrimaryHeading>
      <p>{review.artist}</p>
      <p>{review.review}</p>
      <button onClick={() => history.back()}>
        戻る
      </button>
    </PageWrapper>
  )
}
