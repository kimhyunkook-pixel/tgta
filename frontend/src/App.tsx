// frontend/src/App.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./user/01_login";
import HomePage from "./home/home";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={
          <AppLayout>
            <HomePage />
          </AppLayout>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
