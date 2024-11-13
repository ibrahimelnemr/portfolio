import React, { ReactNode } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ParticlesBackground from "../../components/particleBackground";

type BaseLayoutProps = {
  children: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <ParticlesBackground />
      <Navbar />
      <main className="relative flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
