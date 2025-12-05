import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    alert("ログインしました");
    navigate("/");
  };

  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={handleLogin}>ログインする</button>
    </div>
  );
}
