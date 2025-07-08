import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { postData as initialPosts } from "./data/post";

function App() {
  // localStorageを参照
  const [reviews, setReviews] = useState(() => {
    const stored = localStorage.getItem("reviews");
    return stored ? JSON.parse(stored) : initialPosts;
  });

  // レビューの変更をlocalStorageへ保存
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }), [reviews];

  const addReview = (newReview) => {
    setReviews(prev => [newReview, ...prev]);
  }

  // 編集中レビューの状態
  const [editingReview, setEditingReview] = useState(null);

  return (
    <div className="flex h-screen">
      <div className="flex-1 overflow-y-auto">
        <Outlet context={{ reviews, addReview, setReviews, editingReview, setEditingReview }} />
      </div>
      <div className="w-30 md:w-64 border-l border-gray-200 bg-gray-50">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
