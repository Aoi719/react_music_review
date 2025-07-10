import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import PrimaryHeading from "../components/Heading/PrimaryHeading"
import PageWrapper from "../components/PageWrapper/PageWrapper"
import ReviewCard from "../components/Card/Card";
import { ROUTES } from "../const";

export default function TagSearch() {
  const { tagName } = useParams();
  const { reviews, setReviews, setEditingReview } = useOutletContext();
  const navigate = useNavigate();

  const filtered = reviews.filter(review =>
    Array.isArray(review.tags) && review.tags.includes(tagName)
  );

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
      <PrimaryHeading>タグ：{tagName}</PrimaryHeading>
      <div className="flex flex-col gap-4" >
        {filtered.length === 0 ? (
          <p>このタグの投稿はありません。</p>
        ) : (
          filtered.map((post, index) => {
            return (
              <ReviewCard key={`card-${post.id}`} id={post.id} title={post.title} artist={post.artist} image={post.image} tags={post.tags} rating={post.rating} onDelete={() => handleDelete(index)} onEdit={() => handleEdit(post)}>
                {post.review}
              </ReviewCard>
            )
          })
        )}
      </div>
    </PageWrapper>
  )
}