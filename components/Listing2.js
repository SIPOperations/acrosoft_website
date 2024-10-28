'use client'
import Image from "next/image";
// import Link from "next/link";

const Listing2 = (props) => {
  const headingArray=props.heading.split(' ')
  const lastWordArr=headingArray.splice(headingArray.length-1,1)
  const lastWord=lastWordArr.toString()
  const heading=headingArray.toString().replace(/,/g,' ')
  const handleData=(data)=>{
    // console.log(data)
    const selectedData=props.myList.filter((meta,index)=>(meta.name+index === data))
    // console.log(selectedData[0])
    props.setService(selectedData[0])
  }
  return (
    <div className={`pl-16 xl:pl-40 pr-16 xl:pr-5 py-20 ${props.heading==='Our Values'?
    'w-full':
    props.heading==='Our Services' ? 
    'w-full xl:w-1/2' : ''}`}>
      <h1 className="font-extrabold text-[64px] text-[#1B1B1B] pb-20 xl:pb-0">
        {heading} <span className="text-[#1C6EC4]">{lastWord}</span>
      </h1>
      <ul role="list">
        {props.myList.map((content, index) => (
          <li
            key={index}
            onClick={()=>handleData(content.name+index)}
            className={`group relative flex flex-col xl:flex-row justify-between
              font-extrabold text-2xl cursor-pointer
              ${props.heading === "Our Services" ? 
                content.name === props.service.name ? 'serviceSelect' : 
                "service" : "items-center approach w-full py-10"}`}
          >
            <div className={`flex gap-3 items-center justify-center xl:justify-start 
              ${props.heading !== "Our Services" ?
              'w-[30%]':''}`}>
              <div
                className={`${props.hover ?
                   content.name === props.service.name ? "smallLogo2" : "smallLogo" : "smallLogo2"}`}
              ></div>
              <div>
                {content.name}
              </div>
            </div>
            {props.icon && (
              <Image
                src={content.open}
                alt=""
                className={`absolute top-6 right-0 invisible xl:group-hover:visible
                  ${content.name === props.service.name ? 'invisible xl:visible' : 'invisible'}`}
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
