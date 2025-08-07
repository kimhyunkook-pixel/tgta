// frontend/src/home/home.tsx

const HomePage = () => {
  return (
    <div>
      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>ホーム</h1>
        <p>ログインに成功しました。ようこそ！</p>
      </main>
    </div>
  );
};

export default HomePage;
