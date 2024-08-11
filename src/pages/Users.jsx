import toast from "react-hot-toast";
import DataTable from "../components/DataTable";
import KPIBox from "../components/KPIBox";
import users from "../data/users";
import { calculateActiveUsers, calculateTotalUsers } from "../data/users";

const Users = () => {
  const userColumns = [
    { header: "User ID", accessor: "user_id" },
    { header: "Username", accessor: "username" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
  ];

  const userActions = [
    {
      label: "Edit",
      className: "text-blue-600 dark:text-blue-500",
      modalContent: {
        title: "Edit User",
        render: (item, closeModal) => (
          <form className="min-w-[300px]">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                defaultValue={item.username}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                defaultValue={item.email}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  toast.success("User updated successfully");
                  closeModal();
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
            </div>
          </form>
        ),
      },
    },
    {
      label: "Ban",
      className: "text-red-600 dark:text-red-500",
      modalContent: {
        title: "Ban User",
        render: (item, closeModal) => (
          <div>
            <p className="text-black">
              Are you sure you want to ban {item.username}?
            </p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => {
                  closeModal();
                }}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  toast.success("User banned successfully");
                  closeModal();
                }}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Ban
              </button>
            </div>
          </div>
        ),
      },
    },
  ];

  return (
    <div className="p-4 pb-10 dark:text-white h-full overflow-scroll no-scrollbar">
      <div className="flex w-[45%] md:w-full flex-col items-center md:flex-row md:justify-center gap-5 mb-10">
        <KPIBox
          title="Total Users"
          count={calculateTotalUsers()}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 min-h-44"
        />
        <KPIBox
          title="Users active in the last 24 hours"
          count={calculateActiveUsers()}
          className="bg-gradient-to-r from-indigo-400 to-cyan-400 min-h-44"
        />
      </div>

      <DataTable data={users} columns={userColumns} actions={userActions} />
    </div>
  );
};

export default Users;
