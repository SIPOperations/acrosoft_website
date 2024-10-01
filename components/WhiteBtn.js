'use client'
import Image from "next/image";

const WhiteBtn = (props) => {
  return (
    <button 
    className={`bg-white rounded-md h-14 px-5 flex items-center gap-1
      ${props.border ? 'border border-[#1B1B1B]' : ''}`}
    onClick={props.handle ? props.handle : null}>
      <span
        className="font-normal"
        style={{ color: "#1B1B1B", fontSize: "15px" }}
      >
        {props.name ? props.name : ""}
      </span>
      {props.icon ? <Image src={props.icon} alt="" /> : ""}
    </button>
  );
};

export default WhiteBtn;
