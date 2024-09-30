import Image from "next/image";
import maintainIcon from "../public/img/maintainIcon.svg";
import bussiness from "../public/img/bussiness.svg";
import technology from "../public/img/technology.svg";
import strategy from "../public/img/strategy.svg";

const GridBoxs = (props) => {
  return (
    <div 
    className={`grid  
    ${props.name==='work'?
      'grid-rows-4':
      props.name==='direction'?
      'grid-rows-3':
      'grid-rows-6 lg:grid-rows-3'}
    xl:grid-rows-2 grid-flow-col gap-8 w-full lg:w-auto`}
    >
      {props.gridList.map((work, index) => (
        <div
          key={index}
          className={`flex items-center text-center lg:text-left lg:items-start p-10 flex-col gap-2
            ${props.shadow ? 'boxShade' : ''}`}
        >
          {work.heading !== "Maintainable" &&
          work.heading !== "Software Implementation Strategy" &&
          work.heading !== "Technology Advisory Services" &&
          work.heading !== "Business Solution Consulting" ? (
            work.img && <Image src={work.img} alt="" />
          ) : (
            work.img && <div className="relative">
              <Image src={work.img} alt="" />
              <Image
                src={
                work.heading==='Maintainable' ? 
                maintainIcon : work.heading==='Software Implementation Strategy' ?
                strategy : work.heading==='Technology Advisory Services' ?
                technology : bussiness
                }
                alt=""
                className={`absolute ${work.heading==='Technology Advisory Services'?'top-0 left-0':'top-3.5'}  
                  ${work.heading==='Software Implementation Strategy'?'left-3':
                    work.heading==='Technology Advisory Services'? 'top-0 left-0':
                    'top-3.5 left-4'
                }`}
              />
            </div>
          )}
          <h1 className="font-medium" style={{ fontSize: "32px" }}>
            {work.heading}
          </h1>
          <p
            className="font-normal text-xl text-center lg:text-justify w-3/4"
            style={{ color: "#858585" }}
          >
            {work.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GridBoxs;
