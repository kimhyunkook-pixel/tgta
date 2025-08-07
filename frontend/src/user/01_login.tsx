// frontend/src/user/01_login.tsx

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const navigate = useNavigate();

    // ログインIDとパスワードの状態を管理
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    // ログインボタンをクリックしたときの処理
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/api/v1/login", {
                userId: userId,
                password: password,
            });

            const token = response.data.access_token;
            localStorage.setItem("access_token", token);
            console.log("ログイン成功: トークンを保存しました");

            // ログイン後のページにリダイレクト
            navigate("/home");

        } catch (error: any) {
            console.error("ログイン失敗:", error.response?.data || error.message);
            alert("ログインに失敗しました。IDまたはパスワードをご確認ください。");
        }
    };


    return (
        <div style={{ padding: "2rem" }}>
            <h1>ログイン</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="userId">ログインID：</label>
                    <input
                        type="text"
                        id="userId"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </div>
                <div style={{ marginTop: "1rem" }}>
                    <label htmlFor="password">パスワード：</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                    <button type="submit">ログイン</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
