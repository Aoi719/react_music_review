import { use, useEffect, useState } from "react";
import { Button, Rating, RatingStar } from "flowbite-react";
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
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [rating, setRating] = useState(0);
  const [imageFile, setImageFile] = useState(null);;
  const [imagePreview, setImagePreview] = useState("");

  // 編集ボタン押下時、初期値を流し込む
  useEffect(() => {
    if (editingReview) {
      setTitle(editingReview.title || "");
      setArtist(editingReview.artist || "");
      setImage(editingReview.image || "");
      setReview(editingReview.review || "");
      setTags(Array.isArray(editingReview.tags) ? editingReview.tags : []);
      setTagInput("");
      setRating(editingReview.review || 0);
      setImagePreview(editingReview.image || "");
    }
  }, [editingReview]);

  // タグ入力
  const handleTagKeyDown = (e) => {
    if (e.isComposing) return;
    if (e.key === "Tab" || e.key === ",") {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (newTag !== "" && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput("");
    }
  };
  // タグの削除
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  // 画像ファイル
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingReview) {
      // 編集時
      setReviews((prev) => prev.map((r) =>
        r.id === editingReview.id ? { ...r, title, artist, image: imagePreview || r.image, review, tags, rating } : r
      ));
      setEditingReview(null);
    } else {
      const newReview = {
        id: nanoid(),
        title,
        artist,
        image: imagePreview,
        review,
        tags,
        rating
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
      {/* <div>
        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">画像URL（任意）</label>
        <input type="text" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={image} onChange={(e) => setImage(e.target.value)} />
      </div> */}
      <div>
        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">画像をアップロード</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        />
        {imagePreview && (
          <div className="mt-2">
            <img src={imagePreview} alt="プレビュー" className="max-w-xs rounded" />
          </div>
        )}
      </div>
      <div>
        <label htmlFor="tags" className="block mb-2 text-sm font-medium text-gray-900">タグ</label>
        <input
          type="text"
          id="tags"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleTagKeyDown}
          placeholder="Tabキーまたはカンマ(,)で追加"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="border border-gray-700 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {tag} <button type="button" onClick={() => handleRemoveTag(tag)}>×</button>
            </span>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900">評価</label>
        <Rating id="rating">
          {[1, 2, 3, 4, 5].map((i) => {
            return <RatingStar key={`ragting-${i}`} filled={i <= rating} onClick={() => setRating(i)} className="cursor-pointer" />
          })}
        </Rating>
      </div>
      <div>
        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">レビュー本文</label>
        <textarea id="message" rows="5" className="block p-2.5 w-full text-sm bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
      </div>
      <Button type="submit" color="blue">投稿する</Button>
    </form>
  )
}
