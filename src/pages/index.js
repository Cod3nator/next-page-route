import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/component/Hero";
import Content from "@/component/Content";
import WhoWeAre from "@/component/WhoWeAre";
import OurTeam from "@/component/OurTeam";
import Contact from "@/component/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Hero />
      <Content />
      <WhoWeAre />
      <OurTeam />
      <Contact />
    </main>
  );
}
