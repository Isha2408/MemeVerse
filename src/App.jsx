import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Explore = lazy(() => import("./pages/Explore"));
const Upload = lazy(() => import("./pages/Upload"));
const MemeDetail = lazy(() => import("./pages/Memedetail"));
const Profile = lazy(() => import("./pages/Profile"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-maincolor dark:text-white">
      <Router>
        <Navbar />
        <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/meme/:id" element={<MemeDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}
