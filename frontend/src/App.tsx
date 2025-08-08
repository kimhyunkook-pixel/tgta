// frontend/src/App.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./user/01_login";
import HomePage from "./home/home";
import ComparePageMain from "./compare/main"
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
        <Route path="/compare" element={
          <AppLayout>
            <ComparePageMain />
          </AppLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
