import Footer from "@/components/ui/footer";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth">
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
