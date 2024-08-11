import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import KPIBox from "../components/KPIBox";
import { calculateActiveUsers, calculateTotalUsers } from "../data/users";
import {
  calculatePostsInLast24Hours,
  calculateTotalPosts,
} from "../data/posts";

const Home = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="h-full overflow-scroll no-scrollbar pb-10">
      <h1 className="text-3xl font-semibold dark:text-white">Dashboard</h1>
      <div className="p-4 dark:text-white grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center h-full">
        <KPIBox
          title="Total Users"
          count={calculateTotalUsers()}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 min-h-44"
        />
        <KPIBox
          title="Total Posts"
          count={calculateTotalPosts()}
          className="bg-gradient-to-tr from-violet-500 to-orange-300 min-h-44"
        />
        <KPIBox
          title="Users active in the last 24 hours"
          count={calculateActiveUsers()}
          className="bg-gradient-to-r from-indigo-400 to-cyan-400 min-h-44"
        />
        <KPIBox
          title="Posts published in the last 24 hours"
          count={calculatePostsInLast24Hours()}
          className="bg-gradient-to-r from-rose-400 to-red-500 min-h-44"
        />
      </div>
    </div>
  );
};

export default Home;
