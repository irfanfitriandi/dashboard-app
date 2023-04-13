import Footer from "components/Footer";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex flex-col w-5/6">
        <Header />
        <div className="py-11 px-8">
          {children}
          <Footer />
        </div>
      </main>
    </div>
  );
};
export default Layout;
