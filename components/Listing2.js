import Image from "next/image";
import Link from "next/link";

const Listing2 = (props) => {
  const headingArray=props.heading.split(' ')
  const lastWordArr=headingArray.splice(headingArray.length-1,1)
  const lastWord=lastWordArr.toString()
  const heading=headingArray.toString().replace(/,/g,' ')
  return (
    <div className={`${props.heading==='Our Values'?'w-full':'w-auto'}`}>
      <h1 className="font-extrabold text-[64px] text-[#1B1B1B]">
        {heading} <span className="text-[#1C6EC4]">{lastWord}</span>
      </h1>
      <ul role="list">
        {props.myList.map((content, index) => (
          <li
            key={index}
            className={`group relative flex flex-col xl:flex-row justify-between
              font-normal text-xl
              ${props.heading === "Our Services" ? "service" : "items-center approach w-full py-10"}`}
          >
            <div className={`flex gap-5 items-center justify-center xl:justify-start
              ${props.heading !== "Our Services" ?
              'w-[30%]':''}`}>
              <div
                className={`${props.hover ? "smallLogo" : "smallLogo2"}`}
              ></div>
              <Link href="">{content.name}</Link>
            </div>
            {props.icon && (
              <Image
                src={content.open}
                alt=""
                className="absolute right-0 invisible group-hover:visible"
              />
            )}
            {content.text && (
              <p className={`${props.heading==='Our Values'?'w-[40%]':'w-[70%]'} font-normal text-base text-[#858585]`}>
                {content.text}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listing2;
