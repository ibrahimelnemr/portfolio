import React from "react";
import BaseLayout from "../layouts/baseLayout";
import About from "../components/aboutSection";

export default function MainPage() {
  return (
    <BaseLayout>
      <About />
    </BaseLayout>
  );
}