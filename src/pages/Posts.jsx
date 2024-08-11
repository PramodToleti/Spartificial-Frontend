import toast from "react-hot-toast";
import DataTable from "../components/DataTable";
import KPIBox from "../components/KPIBox";
import posts, {
  calculatePostsInLast24Hours,
  calculateTotalPosts,
} from "../data/posts";

const Posts = () => {
  const postColumns = [
    { header: "Post ID", accessor: "post_id" },
    { header: "Caption", accessor: "caption" },
    { header: "Media URL", accessor: "media_url" },
    { header: "Published Time", accessor: "published_time" },
  ];

  const postActions = [
    {
      label: "Delete",
      className: "text-red-600 dark:text-red-500",
      modalContent: {
        title: "Delete Post",
        render: (item, closeModal) => (
          <div>
            <p className="text-black">
              Are you sure you want to delete this post?
            </p>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  toast.success("Post deleted successfully");
                  closeModal();
                }}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </div>
          </div>
        ),
      },
    },
    {
      label: "Hide",
      className: "text-yellow-600 dark:text-yellow-500",
      modalContent: {
        title: "Hide Post",
        render: (item, closeModal) => (
          <div>
            <p className="text-black">
              Are you sure you want to hide this post?
            </p>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  toast.success("Post hidden successfully");
                  closeModal();
                }}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Hide
              </button>
            </div>
          </div>
        ),
      },
    },
  ];

  return (
    <div className="p-4 pb-10 dark:text-white h-full overflow-scroll no-scrollbar">
      <div className="flex flex-col md:flex-row w-[43%] md:w-full justify-center gap-5 mb-10">
        <KPIBox
          title="Total Users"
          count={calculateTotalPosts()}
          className="bg-gradient-to-tr from-violet-500 to-orange-300 min-h-44"
        />
        <KPIBox
          title="Users active in the last 24 hours"
          count={calculatePostsInLast24Hours()}
          className="bg-gradient-to-r from-rose-400 to-red-500 min-h-44"
        />
      </div>
      <DataTable data={posts} columns={postColumns} actions={postActions} />
    </div>
  );
};

export default Posts;
