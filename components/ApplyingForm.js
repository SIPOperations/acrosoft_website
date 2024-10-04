"use client";
// import BlackBtn from "./BlackBtn";
import PersonalInfo from "./PersonalInfo";
import photoIcon from "@/public/img/photoIcon.svg";
import { useState } from "react";

const ApplyingForm = (props) => {
  const [database, setDatabase] = useState([]);
  // const [formData, setFormData] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    headline: "",
    phone: "",
    address: "",
    photo: null,
  });
  const [profile, setProfile] = useState({
    // education: "",
    // experience: "",
    summary: "",
    resume: null,
  });
  const [details, setDetails] = useState({
    coverletter: "",
  });
  const handleChange=(e)=>{
    const {name,value}=e.target
    setPersonalInfo((prevData)=>({
      ...prevData,
      [name]:value
    }))
    setProfile((prevData)=>({
      ...prevData,
      [name]:value
    }))
    setDetails((prevData)=>({
      ...prevData,
      [name]:value
    }))
  }
  const handleFileChange = (e) => {
    const name=e.target.name
    const selectedFiles = Array.from(e.target.files)
    const singleFile=selectedFiles[0]
    setPersonalInfo((prevData)=>({
      ...prevData,
      [name]:singleFile
    }))
    setProfile((prevData)=>({
      ...prevData,
      [name]:singleFile
    }))
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    // setFormData((prevData)=>[prevData,personalInfo,profile,details])
    setDatabase((prevData)=>[
      ...prevData,{
        post:props.heading,
        data:personalInfo
      }
    ])
    setPersonalInfo({
      firstname: "",
      lastname: "",
      email: "",
      headline: "",
      phone: "",
      address: "",
      photo: null,
    })
    setProfile({
      // education: "",
      // experience: "",
      summary: "",
      // resume: "",
    })
    setDetails({
      coverletter:""
    })
  }
  console.log(database)

  const inputFields = [
    {
      type: "text",
      name: "firstname",
      value:personalInfo.firstname,
      placeholder: "First Name*",
      label: "",
    },
    {
      type: "text",
      name: "lastname",
      value:personalInfo.lastname,
      placeholder: "Last Name*",
      label: "",
    },
    {
      type: "email",
      name: "email",
      value:personalInfo.email,
      placeholder: "E-mail*",
      label: "",
    },
    {
      type: "text",
      name: "headline",
      value:personalInfo.headline,
      placeholder: "Headline(optional)",
      label: "",
    },
    {
      type: "tel",
      name: "phone",
      value:personalInfo.phone,
      placeholder: "Phone Number*",
      label:
        "The hiring team may use this number to contact you about this job.",
    },
    {
      type: "text",
      name: "address",
      value:personalInfo.address,
      placeholder: "Address*",
      label:
        "Include your city, region, and country, so that employers can easily manage your application.",
    },
  ];
  const file1 = {
    img: { photoIcon },
    name:'photo',
    label: "Upload Photo* or drag and drop here",
  };
  const file2 = {
    img: "",
    name:'resume',
    label: "",
  };
  return (
    <div
      className="flex flex-col gap-y-10 justify-between 
    px-16 xl:px-40 py-20 bg-[#F8F8F8] items-center"
    >
      <form onSubmit={handleSubmit} 
      className="flex flex-col items-center lg:items-start gap-5 w-full mt-5">
      <PersonalInfo
        heading="Personal Information"
        inputFields={inputFields}
        addMore={false}
        textArea={false}
        file={file1}
        formContent={personalInfo}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
      />
      <PersonalInfo
        heading="Profile"
        inputFields={false}
        addMore={["Education(optional)", "Experience(optional)"]}
        textArea="Summary*"
        name="summary"
        value={profile.summary}
        file={file2}
        formContent={profile}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
      />
      <PersonalInfo
        heading="Details"
        inputFields={false}
        addMore={false}
        textArea="Cover letter (Optional)"
        name="coverletter"
        value={details.coverletter}
        file={false}
        formContent={details}
        handleChange={handleChange}
      />
      <input type="submit" value="Submit Application"
      className="bg-black rounded-lg text-white flex items-center gap-1 h-14 px-5 text-sm 
      cursor-pointer m-auto" />
      </form>
      {/* <BlackBtn name='Submit Application' /> */}
    </div>
  );
};

export default ApplyingForm;
