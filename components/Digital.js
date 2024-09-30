import Image from "next/image";
import WhiteBtn from "./WhiteBtn";
import digitalJourney from "../public/img/digitalJourney.png";
import openlink from "../public/img/openlink.svg";

const Digital = () => {
  const ratings = [
    {
      name: "Awards Gained",
      value: "10+",
    },
    {
      name: "Years of Experience",
      value: "20+",
    },
    {
      name: "Customers Worldwide",
      value: "500+",
    },
    {
      name: "Customers Satisfaction",
      value: "90%",
    },
  ];
  return (
    <div
      className="digital relative text-white"
    >
      <Image
        src={digitalJourney}
        alt=""
        className="relative -z-10 h-auto w-full object-cover"
      />
      <div className="absolute top-0 left-0 xl:px-40 lg:px-16 px-8 py-16 flex flex-col gap-10 xl:gap-20 justify-center 
      w-full h-full">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="font-extrabold pb-4 md:pb-7 text-center lg:text-left text-5xl lg:text-6xl"
          >
            Leading your
            <br />
            Digital Journey to Success
          </h1>
          <WhiteBtn name={"Let's work togather"} icon={openlink} />
        </div>
        <div
          className="hidden lg:flex items-center pt-3 justify-between"
          style={{ borderTop: "0.5px solid white" }}
        >
          {ratings.map((rate, index) => (
            <div key={index} className="text-center">
              <h1 className="font-extrabold" style={{ fontSize: "64px" }}>
                {rate.value}
              </h1>
              <p className="font-normal text-base">{rate.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Digital;
