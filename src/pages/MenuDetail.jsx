import { useParams } from "react-router-dom";

export default function MenuDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>メニュー詳細</h2>
      <p>メニュー ID: {id} の詳細ページです。</p>
    </div>
  );
}
