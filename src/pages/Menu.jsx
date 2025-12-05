import { Link } from "react-router-dom";

const menuList = [
  { id: 1, name: "コーヒー" },
  { id: 2, name: "カフェラテ" },
  { id: 3, name: "抹茶ラテ" },
];

export default function Menu() {
  return (
    <>
      <h2>メニュー一覧</h2>
      <ul>
        {menuList.map(item => (
          <li key={item.id}>
            <Link to={`/menu/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
