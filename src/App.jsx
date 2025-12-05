import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">ホーム</Link> |{" "}
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          このサイトについて
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

