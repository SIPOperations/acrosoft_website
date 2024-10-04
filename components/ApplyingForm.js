"use client";
// import BlackBtn from "./BlackBtn";
import PersonalInfo from "./PersonalInfo";
import photoIcon from "@/public/img/photoIcon.svg";
import { useState } from "react";

const ApplyingForm = (props) => {
  const [database, setDatabase] = useState({});
  // const [htmlContent,setHtmlContent]=useState('')
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
  // const generateHtmlContent = (title,data) => {
  //   return `
  //     <h2>Form data for the post of ${title}</h2>
  //     <p><strong>First Name:</strong> ${data.firstname}</p>
  //     <p><strong>Last Name:</strong> ${data.lastname}</p>
  //     <p><strong>Email:</strong> ${data.email}</p>
  //     <p><strong>Headline:</strong> ${data.headline}</p>
  //     <p><strong>Phone Number:</strong> ${data.phone}</p>
  //     <p><strong>Address:</strong> ${data.address}</p>
  //     <p><strong>Photo:</strong> ${data.file?.name || 'No file uploaded'}</p>
  //     <p><strong>Summary:</strong> ${data.summary}</p>
  //     <p><strong>Resume:</strong> ${data.file?.name || 'No file uploaded'}</p>
  //     <p><strong>Cover Letter:</strong> ${data.coverletter}</p>
  //   `;
  // };
  const handleSubmit= async(e)=>{
    e.preventDefault()
    // setFormData((prevData)=>[prevData,personalInfo,profile,details])
    const combinedData = {
      firstname: personalInfo.firstname,
      lastname: personalInfo.lastname,
      email: personalInfo.email,
      headline: personalInfo.headline,
      phone: personalInfo.phone,
      address: personalInfo.address,
      photo: personalInfo.photo,  // If you're sending just the name of the file
      summary: profile.summary,
      resume: profile.resume,     // If you're sending just the name of the file
      coverletter: details.coverletter,
    };
    setDatabase({
        post:props.heading,
        data:combinedData
      })
    try {
      const response = await fetch('/api/emailHandle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(database),
      });

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred.');
    }
    // const html=generateHtmlContent(props.heading,personalInfo)
    // setHtmlContent(html)
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
