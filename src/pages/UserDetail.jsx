import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();

  return (
    <>
      <h2>ユーザー詳細</h2>
      <p>ユーザーID: {id}</p>
    </>
  );
}
