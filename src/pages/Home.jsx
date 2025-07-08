import ReviewCard from "../components/Card/Card";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  const { reviews, setReviews } = useOutletContext();

  const handleDelete = (indexToDelete) => {
    const updated = reviews.filter((_, i) => i !== indexToDelete);
    setReviews(updated)
  }
  const setEditingReview = (indexToDelete) => {
  }

  return (
    <PageWrapper>
      <div className="flex flex-col gap-4" >
        {reviews.length === 0 ?
          (<p>投稿がありません。</p>) :
          (reviews.map((post, index) => {
            return (
              <ReviewCard key={`card-${index}`} title={post.title} artist={post.artist} image={post.image} onDelete={() => handleDelete(index)} onEdit={() => setEditingReview(post)}>
                {post.review}
              </ReviewCard>
            )
          }))
        }
      </div>
    </PageWrapper>
  )
}

