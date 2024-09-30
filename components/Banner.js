import WhiteBtn from "../components/WhiteBtn";
import play from "../public/img/play.svg";
import openlink from "../public/img/openlink.svg";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 py-16 px-16 xl:px-40 h-full w-full flex xl:items-start 
      items-center flex-col justify-center">
        <h1 className="font-extrabold text-white" style={{ fontSize: "64px" }}>
          Acrosoft
        </h1>
        <p className="hidden md:block text-center font-normal text-xl text-white xl:text-justify xl:w-4/12 mb-5">
          Since 2006, Afiniti has been a pioneer in customer experience (CX)
          artificial intelligence (AI), delivering measurably better business
          outcomes.
        </p>
        <div className="hidden md:flex items-center gap-4">
          <WhiteBtn icon={play} />
          <WhiteBtn name={"Schedule a Briefing"} icon={openlink} />
        </div>
      </div>
      <video
        id="bannerVideo"
        autoPlay
        loop
        muted
        height="auto"
        width="100%"
      >
        <source src="videos/Acrosoft.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Banner;
