"use client";
import PersonalInfo from "./PersonalInfo";
import photoIcon from "@/public/img/photoIcon.svg";
import { useState } from "react";

const ApplyingForm = (props) => {
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
    const { name, value } = e.target;

  if (name in personalInfo) {
    setPersonalInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  } else if (name in profile) {
    setProfile((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  } else if (name in details) {
    setDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  }
  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
  
    if (name in personalInfo) {
      setPersonalInfo((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    } else if (name in profile) {
      setProfile((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    }
  };

  const handleSubmit= async(e)=>{
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('post', props.heading);
    formData.append('firstname', personalInfo.firstname);
    formData.append('lastname', personalInfo.lastname);
    formData.append('email', personalInfo.email);
    formData.append('headline', personalInfo.headline);
    formData.append('phone', personalInfo.phone);
    formData.append('address', personalInfo.address);
    if (personalInfo.photo) formData.append('photo', personalInfo.photo); // Add file
    formData.append('summary', profile.summary);
    if (profile.resume) formData.append('resume', profile.resume); // Add file
    formData.append('coverletter', details.coverletter);
    // for (const [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }    
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: formData, // Send formData for file upload
      });
      if (response.ok) {
        // alert('Email sent successfully!');
        alert('Data store successfully!');
      } else {
        // alert('Failed to send email.');
        alert('Failed to store data.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred.');
    }
  
    setPersonalInfo({
      firstname: "",
      lastname: "",
      email: "",
      headline: "",
      phone: "",
      address: "",
      photo: null,
    });
    setProfile({
      summary: "",
      resume: null,
    });
    setDetails({
      coverletter:""
    });
  };

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
    </div>
  );
};

export default ApplyingForm;
