import SmallImage from "./SmallImage";
import mission from "../public/img/mission.png";

const Mission = () => {
  const image = [mission];
  return (
    <div className="flex flex-col gap-5 text-center xl:text-left px-16 xl:px-40 py-20">
      <div
        className="text-center xl:text-left flex flex-col gap-y-28 xl:flex-row justify-between 
     items-center"
      >
        <div className="xl:w-2/4 w-auto">
          <h1 className="font-extrabold text-[64px] text-[#1B1B1B]">
            Our Mission
          </h1>
          <p className="font-normal text-xl text-[#858585]">
            At Acrosoft our mission is to simplify technology solutions,
            empowering businesses to achieve their full potential. We believe in
            delivering innovative, scalable, and user-friendly software
            solutions that address real-world challenges.
          </p>
          <p className="font-normal text-xl text-[#858585]">
            We believe that the future is digital. We also believe that without
            embracing new technology, businesses postpone their growth.We help
            businesses unveil and satisfy demand for digital transformation by
            providing engineering and consulting services that foster
            competitiveness and innovation.
          </p>
        </div>
        <SmallImage myImage={image} />
      </div>
    </div>
  );
};

export default Mission;
