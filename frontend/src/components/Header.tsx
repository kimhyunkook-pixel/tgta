// frontend/src/components/Header.tsx

const Header = () => {
  const userId = localStorage.getItem("user_id") || "ゲスト";

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_id");
    window.location.href = "/";
  };

  return (
    <header
      style={{
        height: "60px",
        backgroundColor: "#333",
        color: "#fff",
        padding: "0 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ fontWeight: "bold" }}>TGTA</div>
      <div>
        <span style={{ marginRight: "1rem" }}>ようこそ, {userId} さん</span>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    </header>
  );
};

export default Header;
