import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import Login from "./pages/Login";


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

        {/* 古いURLからのリダイレクト */}
        <Route path="old-home" element={<Navigate to="/" replace />} />

        
      </Route>

      {/* レイアウト外のページ */}
      <Route path="/login" element={<Login />} />

    </Routes>
  );
}

export default App;
