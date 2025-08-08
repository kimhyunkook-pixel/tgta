// frontend/src/components/Header.tsx

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/drarLogo.svg"; //

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
      <Link to="/home" style={{ display: "flex", alignItems: "center", border: "#FFFFFF thin solid" }}>
        <div style={{ height: "40px" }}>
          <Logo style={{ height: "100%", width: "auto", display: "block" }} />
        </div>
      </Link>

      <div>
        <span style={{ marginRight: "1rem" }}>ようこそ, {userId} さん</span>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    </header>
  );
};

export default Header;
