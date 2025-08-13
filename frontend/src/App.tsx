// frontend/src/App.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/01_user/01_login";
import HomePage from "./pages/02_home/01_main";
import ComparePageMain from "./pages/03_compare/01_main"
import AppLayout from "./pages/00_common/components/AppLayout";

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
