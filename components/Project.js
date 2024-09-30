import Image from "next/image";
import BlueBtn from "./BlueBtn";
import whiteArrow from "../public/img/whiteArrow.svg";
import projectImg from "../public/img/projectImg.png";
import seo from "../public/img/seo.png";

const Project = () => {
  return (
    <div className="xl:px-40 px-16 py-20 flex items-center xl:items-start flex-col gap-6">
      <h1
        className="font-extrabold text-center xl:text-left"
        style={{ fontSize: "64px", color: "#1B1B1B", lineHeight: "75px" }}
      >
        Our Latest Projects
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 grid-flow-row gap-5 gap-y-6 items-center 
      justify-center">
        <div className='flex flex-col items-center xl:items-start text-center xl:text-left'>
          <h2 className="font-medium" style={{ fontSize: "32px" }}>
            FitFam
          </h2>
          <div className="pt-3 pb-5 flex flex-col items-center xl:items-start">
            <p
              className="font-normal text-lg w-9/12"
              style={{ color: "#858585" }}
            >
              Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porta
              consequat eget dictum maximus. Tempus elementum mus luctus
              habitant sapien platea. Per dis penatibus pretium tellus amet
              ornare mi. Volutpat viverra volutpat fames egestas molestie
              natoque senectus. Turpis nunc dictum laoreet; risus commodo elit
              vestibulum. Habitasse ad ex pulvinar orci massa. Urna curae
              gravida penatibus parturient; accumsan vestibulum vivamus. Lacinia
              molestie enim aptent facilisis habitant venenatis ex. consequat.
            </p>
            <p className="font-normal text-lg w-9/12" style={{ color: "#858585" }}>
              Ullamcorper dis suspendisse dictumst torquent primis at netus.
            </p>
          </div>
          <BlueBtn name={"View Details"} icon={whiteArrow} />
        </div>
        <div className="p-0 m-0 flex justify-center xl:justify-start">
          <Image src={projectImg} alt="" className="p-0 m-0" style={{}} />
        </div>
        <div className="p-0 m-0 flex justify-center xl:justify-start">
          <Image src={seo} alt="" className="p-0 m-0" />
        </div>
        <div className='flex flex-col items-center xl:items-start text-center xl:text-left'>
          <h2 className="font-medium" style={{ fontSize: "32px" }}>
            SEO Expert
          </h2>
          <div className="pt-3 pb-5 flex flex-col items-center xl:items-start">
            <p
              className="font-normal text-lg w-9/12"
              style={{ color: "#858585" }}
            >
              Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porta
              consequat eget dictum maximus. Tempus elementum mus luctus
              habitant sapien platea. Per dis penatibus pretium tellus amet
              ornare mi. Volutpat viverra volutpat fames egestas molestie
              natoque senectus. Turpis nunc dictum laoreet; risus commodo elit
              vestibulum. Habitasse ad ex pulvinar orci massa. Urna curae
              gravida penatibus parturient; accumsan vestibulum vivamus. Lacinia
              molestie enim aptent facilisis habitant venenatis ex. consequat.
            </p>
            <p className="font-normal text-lg w-9/12" style={{ color: "#858585" }}>
              Ullamcorper dis suspendisse dictumst torquent primis at netus.
            </p>
          </div>
          <BlueBtn name={"View Details"} icon={whiteArrow} />
        </div>
      </div>
    </div>
  );
};

export default Project;
