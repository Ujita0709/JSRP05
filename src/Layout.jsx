import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header style={{ padding: 20, background: "#eef" }}>
        <h1>共通ヘッダー</h1>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/about">About</NavLink> |{" "}
        <NavLink to="/users">Users</NavLink> |{" "}
        <NavLink to="/menu">Menu</NavLink>
      </header>

      <main style={{ padding: 20 }}>
        <Outlet />
      </main>

      <footer style={{ background: "#eee", padding: 20, marginTop: 50 }}>
        © 2025 React Sample Site
      </footer>
    </div>
  );
}
