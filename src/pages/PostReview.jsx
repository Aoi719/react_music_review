import Form from "../components/Form/Form"
import PrimaryHeading from "../components/Heading/PrimaryHeading"
import PageWrapper from "../components/PageWrapper/PageWrapper"

export default function PostReview() {
  return (
    <PageWrapper>
      <PrimaryHeading>音楽レビューを投稿する</PrimaryHeading>
      <Form />
    </PageWrapper>
  )
}