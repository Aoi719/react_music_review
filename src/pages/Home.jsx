import { postData } from "../data/post";
import ReviewCard from "../components/Card/Card";

export default function Home() {
  return (
    <div className="p-6 flex flex-col gap-4" >
      {
        postData.map((post, index) => {
          return (
            <ReviewCard key={`card-${index}`} title={post.title} artist={post.artist} image={post.image}>
              {post.review}
            </ReviewCard>
          )
        })
      }
    </div>
  )
}

