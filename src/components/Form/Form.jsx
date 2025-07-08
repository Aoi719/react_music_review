import { useState } from "react";
import { Button } from "flowbite-react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ROUTES } from "../../const";
import { nanoid } from "nanoid";

export default function Form() {
  const { addReview, editingReview, setReviews, setEditingReview } = useOutletContext();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [image, setImage] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingReview) {
      // 編集時
      setReviews((prev) => prev.map((r) =>
        r.id === editingReview.id ? { ...r, title, artist, image, review } : r
      ));
      setEditingReview(null);
    } else {
      const newReview = {
        id: nanoid(),
        title,
        artist,
        image,
        review
      };
      addReview(newReview);
    }
    navigate(ROUTES.HOME);
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div>
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">曲名</label>
        <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="artist" className="block mb-2 text-sm font-medium text-gray-900">アーティスト名</label>
        <input type="text" id="artist" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={artist} onChange={(e) => setArtist(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">画像URL（任意）</label>
        <input type="text" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <div>
        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">レビュー本文</label>
        <textarea id="message" rows="5" className="block p-2.5 w-full text-sm bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
      </div>
      <Button type="submit" color="blue">投稿する</Button>
    </form>
  )
}
