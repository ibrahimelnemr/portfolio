import React, { ReactNode } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ParticlesBackground from "../../components/particleBackground";

type BaseLayoutProps = {
  children: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <main className="relative flex-grow flex flex-col p-0">
        {children}
      </main>
      <Footer />
    </>
  );
}
