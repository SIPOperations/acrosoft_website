import Heading1 from "./Heading1"
import GridBoxs from "./GridBoxs"
import whiteLogoSlider from "@/public/img/whiteLogoSlider.svg"
import whiteStar1 from "../public/img/whiteStar.svg";
import orangeStar1 from "../public/img/orangeStar.svg";
import whiteStar2 from "../public/img/whiteStar.svg";
import orangeStar2 from "../public/img/orangeStar.svg";

const ClientQuotes = () => {
    const images = [
        {
          heading: "Adam",
          img: whiteLogoSlider,
          rate: [orangeStar1, orangeStar2, whiteStar1, whiteStar2, whiteStar1],
          content:
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porta consequat eget dictum maximus.",
        },
        {
          heading: "Harry",
          img: whiteLogoSlider,
          rate: [orangeStar1, orangeStar2, whiteStar1, whiteStar2],
          content:
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porta consequat eget dictum maximus.",
        },
        {
          heading: "Morris",
          img: whiteLogoSlider,
          rate: [orangeStar1, orangeStar2, whiteStar1, whiteStar2],
          content:
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porta consequat eget dictum maximus.",
        },
        {
          heading: "John",
          img: whiteLogoSlider,
          rate: [orangeStar1, orangeStar2, orangeStar1, whiteStar2, whiteStar1],
          content:
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porta consequat eget dictum maximus.",
        },
        {
          heading: "Jane",
          img: whiteLogoSlider,
          rate: [orangeStar1, orangeStar2, whiteStar1, whiteStar2],
          content:
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porta consequat eget dictum maximus.",
        },{
            heading: "Adam",
            img: whiteLogoSlider,
            rate: [orangeStar1, orangeStar2, whiteStar1, whiteStar2, whiteStar1],
            content:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porta consequat eget dictum maximus.",
        }
    ];
  return (
    <div className="text-center xl:text-left flex flex-col gap-y-28 justify-between
    px-16 xl:px-40 py-20 bg-[#F4F9FF]">
        <Heading1 topic={'Client Intraction Quotes'} />
        <GridBoxs gridList={images} name={'quotes'} shadow={true} />
    </div>
  )
}

export default ClientQuotes