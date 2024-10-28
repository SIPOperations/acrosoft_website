"use client";
import services from "../public/img/services.png";
// import topLightLogo from '../public/img/newlightLogo.svg'
// import bottomLightLogo from '../public/img/newlightLogo2.svg'
import openlink from "../public/img/openlink.svg";
import Listing2 from "./Listing2";
import ServiceDetails from "./ServiceDetails";
import { useState } from "react";
// import SmallImage from './SmallImage'

const Services = () => {
  // const images=[services,topLightLogo,bottomLightLogo]
  const servicelist = [
    {
      name: "Graphic Designing",
      content: `Our software development company delivers corporate and consumer
          applications based on our profound understanding of technologies and
          the markets they operate in. With our professional mindset, we look
          beyond technology to offer viable solutions for your particular
          business context.`,
      open: openlink,
      details: [
        {
          subHead: "Application development",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
        {
          subHead: "Application security",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
        {
          subHead: "Software product engineering",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: services,
        },
        {
          subHead: "Enterprise app integration",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
        {
          subHead: "QA & Testing",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
      ],
    },
    {
      name: "React JS",
      content: `We create digital transformation roadmaps and implement technologies that become growth drivers for our customers’ businesses.`,
      open: openlink,
      details: [
        {
          subHead: "Microsoft",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
        {
          subHead: "Salesforce",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
        {
          subHead: "SAP Commerce",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
        {
          subHead: "Cloud",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: services,
        },
        {
          subHead: "Mobile",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
        {
          subHead: "Cyber Security",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
      ],
    },
    {
      name: "Microservices and Web services",
      content: `We put together software ecosystems that enable end-to-end process automation, data-driven decision making, and productive collaboration based on growth-ready technologies.`,
      open: openlink,
      details: [
        {
          subHead: "ERP",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
        {
          subHead: "Portals",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
        {
          subHead: "Business process management",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: services,
        },
        {
          subHead: "HR Management",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
        {
          subHead: "Document Management",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
        {
          subHead: "CRM",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
      ],
    },
    {
      name: "AWS and Azure cloud services",
      content: `We build strategic data analytics platforms helping businesses gain value from their data assets and extend their capabilities to truly data-driven decision making.`,
      open: openlink,
      details: [
        {
          subHead: "Data Science",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
        {
          subHead: "Predictive Analytics",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
        {
          subHead: "Business Intelligence",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: services,
        },
        {
          subHead: "Tableau",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
        {
          subHead: "Power BI",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
      ],
    },
    {
      name: "Dashboarding and reporting",
      content: `We help you shift to the new business paradigm, using emerging technologies to support this strategic move with intelligent solutions.`,
      open: openlink,
      details: [
        {
          subHead: "RPA",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
        {
          subHead: "Computer Vision",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
        {
          subHead: "Machine Learning",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: services,
        },
        {
          subHead: "AR / VR",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
        {
          subHead: "Internet of things",
          subContent:
            "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
          img: "",
        },
      ],
    },
  ];
  const [service, setService] = useState(servicelist[0]);
  return (
    <div
      className="text-center xl:text-left flex flex-col gap-y-28 xl:flex-row gap-10 
     bg-[#F4F9FF] border-b border-slate-300"
    >
      <Listing2
        myList={servicelist}
        heading={"Our Services"}
        icon={true}
        hover={true}
        setService={setService}
      />
      <ServiceDetails service={service} />
      {/* <div className='p-16'>
          <SmallImage myImage={images} />
        </div> */}
    </div>
  );
};

export default Services;
