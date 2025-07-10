import ReviewCard from "../components/Card/Card";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { ROUTES } from "../const";

export default function Home() {
  const { reviews, setReviews, setEditingReview } = useOutletContext();
  const navigate = useNavigate();

  const handleDelete = (indexToDelete) => {
    const updated = reviews.filter((_, i) => i !== indexToDelete);
    setReviews(updated)
  }
  const handleEdit = (review) => {
    setEditingReview(review);
    navigate(ROUTES.POSTREVIEW);
  }

  return (
    <PageWrapper>
      <h1 className="sr-only">トップページ</h1>
      <div className="flex flex-col gap-4" >
        {reviews.length === 0 ?
          (<p>投稿がありません。</p>) :
          (reviews.map((post, index) => {
            return (
              <ReviewCard key={`card-${post.id}`} id={post.id} title={post.title} artist={post.artist} image={post.image} tags={post.tags} rating={post.rating} onDelete={() => handleDelete(index)} onEdit={() => handleEdit(post)}>
                {post.review}
              </ReviewCard>
            )
          }))
        }
      </div>
    </PageWrapper>
  )
}