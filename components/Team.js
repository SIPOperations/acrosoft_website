import SmallImage from "./SmallImage";
import team from "../public/img/team.png";

const Team = () => {
  const image = [team];
  return (
    <div className="flex flex-col gap-5 text-center xl:text-left px-16 xl:px-40 py-20">
      <div
        className="text-center xl:text-left flex flex-col gap-y-28 xl:flex-row justify-between 
     items-center"
      >
        <div className="xl:w-2/4 w-auto">
          <h1 className="font-extrabold text-[64px] text-[#1B1B1B]">
            Meet the Team
          </h1>
          <p className="font-normal text-xl text-[#858585]">
            Our team is made up of talented engineers, designers, and project
            managers who share a passion for technology. With diverse
            backgrounds and skillsets, we are united by our goal of solving
            complex problems with elegant software solutions. Meet the people
            behind the scenes who make it all happen.
          </p>
          <p className="font-normal text-xl text-[#858585]">
            CTO at <span className="text-black font-bold">Tech Innovators</span>
          </p>
        </div>
        <SmallImage myImage={image} />
      </div>
    </div>
  );
};

export default Team;
