// frontend/src/home/home.tsx
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const moveToCompare = () => {
    navigate("/compare");
  };

  return (
    <div>
      <main
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>ホーム</h1>
        <p>ログインに成功しました。ようこそ！</p>
        <button onClick={moveToCompare}>比較作業</button>
      </main>
    </div>
  );
};

export default HomePage;
