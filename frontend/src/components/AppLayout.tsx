// frontend/src/components/AppLayout.tsx

import React from "react";
import Header from "./Header";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
