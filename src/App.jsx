import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/users"
        element={
          <Layout>
            <Users />
          </Layout>
        }
      />
      <Route
        path="/posts"
        element={
          <Layout>
            <Posts />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
