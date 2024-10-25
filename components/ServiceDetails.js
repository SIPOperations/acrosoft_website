import Image from "next/image";
import Link from "next/link";
import services from "../public/img/services.png";
import rightArrow from "../public/img/rightArrow2.svg";

const ServiceDetails = (props) => {
//   console.log(props.service)
//   const details = [
//     {
//       subHead: "Application development",
//       subContent:
//         "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
//       img: "",
//     },
//     {
//       subHead: "Application security",
//       subContent:
//         "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
//       img: "",
//     },
//     {
//       subHead: "Software product engineering",
//       subContent:
//         "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
//       img: services,
//     },
//     {
//       subHead: "Enterprise app integration",
//       subContent:
//         "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
//       img: "",
//     },
//     {
//       subHead: "QA & Testing",
//       subContent:
//         "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
//       img: "",
//     },
//   ];
  return (
    <div className="pr-16 xl:pr-40 pl-14 py-28 bg-white w-1/2 h-full flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-3xl">{props.service.name}</h1>
        <p>{props.service.content}</p>
      </div>
      <div className={`grid ${props.service.details.length>5 ? 'grid-cols-3' : 'grid-cols-2'} gap-5`}>
        {props.service.details.map((detail, index, details) => (
          <Link
            key={index}
            href="#"
            className={`border border-slate-300 relative flex items-center hover:shadow-lg
                ${detail.img !== '' ? details.length>5 ? 'col-span-3' : 'col-span-2' : ''}`}
          >
            {
              detail.img !== '' &&
              <Image src={services} alt="" className="w-44 h-full" /> 
            }
            <div className="p-3 pb-12 flex flex-col gap-3">
              <h1 className="font-semibold text-lg">
                {detail.subHead}
              </h1>
              <p>{detail.subContent}</p>
            </div>
            <div className="border border-slate-300 border-r-0 border-b-0 p-3 absolute -bottom-0 -right-0">
              <Image src={rightArrow} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
