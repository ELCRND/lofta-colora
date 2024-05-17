import type { Metadata } from "next";
// import { Counter } from "./components/modules/counter/Counter";
import Hero from "./components/modules/Hero/Hero";

export default function IndexPage() {
  return (
    <>
      {/* <Counter />; */}
      <Hero />
    </>
  );
}

export const metadata: Metadata = {
  title: "Colora",
};
