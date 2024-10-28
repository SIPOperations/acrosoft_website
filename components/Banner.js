// import WhiteBtn from "../components/WhiteBtn";
// import play from "../public/img/play.svg";
// import openlink from "../public/img/openlink.svg";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative top-0 left-0 py-16 px-16 xl:px-20 h-full w-full flex 
      items-center flex-col justify-center">
        <p className="block text-center text-white mb-5 drop-shadow-2xl
         text-[60px] font-bold">
          As a global software engineering firm, we're been delivering success for over 20 years.
        </p>
        {/* <div className="flex items-center gap-4">
          <WhiteBtn icon={play} />
          <WhiteBtn name={"Schedule a Briefing"} icon={openlink} />
        </div> */}
      </div>
      <video
        id="bannerVideo"
        autoPlay
        loop
        muted
        height="0"
        width="0"
        className="absolute top-0 left-0 object-cover w-full h-full -z-10"
      >
        <source src="videos/Acrosoft-2-Final.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Banner;
