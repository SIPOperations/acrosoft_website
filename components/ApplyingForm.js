import BlackBtn from "./BlackBtn";
import PersonalInfo from "./PersonalInfo";
import photoIcon from '@/public/img/photoIcon.svg'

const ApplyingForm = () => {
  const inputFields = [
    {
      type: "text",
      name: "firstname",
      placeholder: "First Name*",
      label: "",
    },
    {
      type: "text",
      name: "lastname",
      placeholder: "Last Name*",
      label:''
    },
    {
      type: "email",
      name: "email",
      placeholder: "E-mail*",
      label:''
    },
    {
      type: "text",
      name: "headline",
      placeholder: "Headline(optional)",
      label:''
    },
    {
      type: "tel",
      name: "phone",
      placeholder: "Phone Number*",
      label:
        "The hiring team may use this number to contact you about this job.",
    },
    {
      type: "text",
      name: "address",
      placeholder: "Address*",
      label:
        "Include your city, region, and country, so that employers can easily manage your application.",
    },
  ];
  const file1={
    img:{photoIcon},
    label:'Upload Photo* or drag and drop here'
  }
  const file2={
    img:'',
    label:''
  }
  return (
    <div
      className="flex flex-col gap-y-10 justify-between 
    px-16 xl:px-40 py-20 bg-[#F8F8F8] items-center"
    >
      <PersonalInfo 
      heading='Personal Information'
      inputFields={inputFields} 
      addMore={false}
      textArea={false} 
      file={file1}  />
      <PersonalInfo 
      heading='Profile'
      inputFields={false} 
      addMore={['Education(optional)','Experience(optional)']}
      textArea='Summary*' 
      file={file2}  />
      <PersonalInfo 
      heading='Details'
      inputFields={false} 
      addMore={false}
      textArea='Cover letter (Optional)' 
      file={false}  />
      <BlackBtn name='Submit Application' />
    </div>
  );
};

export default ApplyingForm;
