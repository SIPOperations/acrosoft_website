import SmallImage from "./SmallImage";
import softwareConsult from "../public/img/softwareConsult.png";
import GridBoxs from "./GridBoxs";
import maintainable from "../public/img/maintainable.svg";

const KeyDirection = () => {
  const directions = [
    {
      img: maintainable,
      heading: "Software Implementation Strategy",
      content:
        "We help companies draw up their short- and long-term software implementation roadmaps. We advocate reasonable software investment while ensuring smooth business transformation through custom solutions and their safe adoption.",
    },{
      img: maintainable,
      heading: "Business Solution Consulting",
      content:
        "When companies have doubts choosing the right software for their challenges, we provide business solution consulting. Together, we decide on the system to implement (CRM, ERP, DMS, CMS, etc.) as well as the development and customization scope.",
    },{
      img: maintainable,
      heading: "Technology Advisory Services",
      content:
        "Itransition’s software consultants assist our customers in selecting the right technology stacks for their solutions. Be it a programming language or a ready-to-use platform, we help businesses review technologies’ pros and cons before starting their projects.",
    }
  ];
  const image = [softwareConsult];
  return (
    <div className="flex flex-col gap-5 text-center xl:text-left px-16 xl:px-40 py-20">
      <div
        className="text-center xl:text-left flex flex-col gap-y-28 xl:flex-row justify-between 
     items-center"
      >
        <div className="xl:w-2/4 w-auto">
          <h1 className="font-extrabold text-[64px] text-[#1B1B1B]">
            Key Directions of Software Consulting
          </h1>
          <p className="font-normal text-xl text-[#858585]">
            Since entering the software development market in 1998, Itransition
            has been guiding businesses toward more effective operations,
            services, and products with tailored software solutions. As a
            software consulting company, Itransition sees its mission in helping
            companies across industries create optimal digital environments
            aligned with their technical capacity, business requirements,
            employees’ needs, and customers’ expectations.
          </p>
        </div>
        <SmallImage myImage={image} />
      </div>
      <GridBoxs gridList={directions} name={'direction'} />
    </div>
  );
};

export default KeyDirection;
