import { Metadata } from "next";
import Favorites from "../components/modules/Favorites/Favorites";

export default function IndexPage() {
  return (
    <>
      <Favorites />
    </>
  );
}

export const metadata: Metadata = {
  title: "Избранное",
};
