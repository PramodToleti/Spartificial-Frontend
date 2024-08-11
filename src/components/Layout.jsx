import { Toaster } from "react-hot-toast";
import DarkModeToggle from "./DarkModeToggle";
import Navbar from "./Navbar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-y-hidden no-scrollbar dark:bg-[#111827]">
      <Toaster />
      <Navbar />
      <div className="flex-1 p-4">
        <DarkModeToggle />
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
