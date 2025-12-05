import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetail";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Routes>

      {/* 共通レイアウト */}
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        {/* Users */}
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetail />} />

        {/* Menu */}
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:id" element={<MenuDetail />} />

        <Route path="contact" element={<Contact />} />

        {/* 古いURLからのリダイレクト */}
        <Route path="old-home" element={<Navigate to="/" replace />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* レイアウト外のページ */}
      <Route path="/login" element={<Login />} />

    </Routes>
  );
}

export default App;
