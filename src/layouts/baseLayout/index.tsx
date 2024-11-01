import React, { ReactNode } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import classes from "./style.module.scss";

type BaseLayoutProps = {
  children: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Navbar />
      <main className={`container-fluid flex-grow-1 d-flex flex-column p-0 bg-light`}>
        {children}
      </main>
      <Footer/>
    </>
  );
}
