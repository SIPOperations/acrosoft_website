import quality from "../public/img/quality.svg";
import reliability from "../public/img/reliability.svg";
import workTime from "../public/img/time.svg";
import maintainable from "../public/img/maintainable.svg";
import GridBoxs from "./GridBoxs";

const Work = () => {
  const working = [
    {
      img: quality,
      heading: "Quality Products",
      content:
        "We believe in Software Quality that is essential to deliver the product on time and on the required quality.",
    },
    {
      img: workTime,
      heading: "Timely Work",
      content:
        "We always plan the Project Development schedule for deploying the Project on time with all completed requirements.",
    },
    {
      img: reliability,
      heading: "Reliability",
      content:
        "Failure Free Products are our main target.We always develope the most reliable Products without any failure issue on future.",
    },
    {
      img: maintainable,
      heading: "Maintainable",
      content:
        "Our Products are fully maintainable for the injection of any new Functionality or Requirement.",
    },
  ];
  return (
    <div className="flex flex-col xl:px-40 sm:px-16 px-10 py-16 items-center xl:items-start">
      <h1 className="font-extrabold text-center text-[64px] text-[#1B1B1B]">
        What We Do
      </h1>
      <GridBoxs gridList={working} name={'work'} />
    </div>
  );
};

export default Work;
