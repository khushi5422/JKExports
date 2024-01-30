import { Inter } from "next/font/google";
import NextJsCarousel from "@/components/carousel";
import Parallax from "@/components/parallax";
import Slider from "@/components/slider";
import Owner from "@/components/owner";
import Services from "@/components/services";
import AboutUs from "@/components/aboutus";
import EmblaCarousel from "@/components/fadecarousal";
import { EmblaOptionsType } from "embla-carousel";
import ThumbnailCarousel from "@/components/thumbnailcarousal";


const inter = Inter({ subsets: ["latin"] });
const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const OPTIONS2: EmblaOptionsType = {}
const SLIDE_COUNT2 = 10
const SLIDES2 = Array.from(Array(SLIDE_COUNT2).keys())
export default function Home() {
  return (
    <>
      <NextJsCarousel />
      <AboutUs />
      <ThumbnailCarousel slides={SLIDES2} options={OPTIONS2}/>
      <Services />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Parallax />
      <Slider />
      <Owner />
    </>);
}
