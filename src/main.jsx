import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import PostReview from "./pages/PostReview";
import Detail from "./pages/Detail";
import TagSearch from "./pages/TagSearch";
import "./index.css";
import { ROUTES } from "./const";
import { StrictMode } from "react";
import Profile from "./pages/Profile";


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.POSTREVIEW} element={<PostReview />} />
          <Route path={`${ROUTES.DETAIL}:id`} element={<Detail />} />
          <Route path={`${ROUTES.TAG}:tagName`} element={<TagSearch />} />
          <Route path={`${ROUTES.PROFILE}`} element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)