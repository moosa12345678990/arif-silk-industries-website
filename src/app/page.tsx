import { Metadata } from "next";
import HomeOnePage from "./(homes)/home-1/page";
import HomePageTwo from "./(homes)/home-2/page";
export const metadata: Metadata = {
  title: "Liko - Home Page",
};

export default function Home() {
  return (
    <>
      <HomePageTwo />
    </>
  );
}
