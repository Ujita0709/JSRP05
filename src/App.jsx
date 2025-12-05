import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import Login from "./pages/Login";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">ホーム</Link> |
        <NavLink to="/about">このサイトについて</NavLink> |
        <Link to="/users">ユーザー一覧</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
<Route path="/login" element={<Login />} />
<Route path="/top" element={<Navigate to="/" replace />} />

      </Routes>
    </div>
  );
}

export default App;
