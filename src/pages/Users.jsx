import { Link } from "react-router-dom";

export default function Users() {
  const users = [
    { id: 1, name: "山田太郎" },
    { id: 2, name: "鈴木花子" },
  ];

  return (
    <>
      <h2>ユーザー一覧</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
