import { Metadata } from "next";
import Hero from "./(ui)/hero";
import Offering from "./(ui)/offering";
import ScrollVideo from "./(ui)/scroll-video";
import Announcement from "./(ui)/announcement";
import Services from "./(ui)/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { webLinks } from "@/app/constants";
// import Projects from "./(ui)/projects";

export const metadata: Metadata = {
  title: "Interior Design",
  description: "Transform Your Space",
};

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center ">
      <Hero />
      <ScrollVideo />
      <Offering />
      <Announcement />
      {/* <Projects /> */}
      <Services />
    </div>
  );
}


