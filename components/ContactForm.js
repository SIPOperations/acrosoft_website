import BlackBtn from "./BlackBtn";
import WhiteBtn from "./WhiteBtn";
import rightArrow from "../public/img/rightArrow.svg";

const ContactForm = () => {
  const inputFields=[
    {
      type:'text',
      name:'username',
      placeholder:'Full Name'
    },{
      type:'email',
      name:'email',
      placeholder:'E-mail'
    },{
      type:'tel',
      name:'phone',
      placeholder:'Phone Number'
    },{
      type:'text',
      name:'organization',
      placeholder:'Organization'
    }
  ]
  const buttons=[
    {
      name:'?',
      functionality:'',
      border:true
    },{
      name:'Attach File',
      functionality:'',
      border:true
    }
  ]
  return (
    <div className="flex flex-col xl:px-40 sm:px-16 px-10 py-16 items-center xl:items-start">
      <h1 className="font-extrabold text-center text-[64px] text-[#1B1B1B]">
        Get In Touch
      </h1>
      <p className="font-normal text-center xl:text-left text-xl text-[#858585] w-auto lg:w-[50%]">
        Drop us a line about your project at 
        <span className="text-black">info@acrosoft.com</span> or via the contact
        form below, and we will contact you within a business day.
      </p>
      <form className="flex flex-col items-center lg:items-start gap-5 w-full mt-5">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
          {inputFields.map((field,index)=>(
            <input key={index} type={field.type} name={field.name} id={field.name} placeholder={field.placeholder} 
            className="bg-[#EFEFEF] text-base font-normal px-8 py-4 border-none outline-none rounded-[10px]" />
          ))}
          <textarea name="help" id="help" placeholder="How can we help you?" 
          className="bg-[#EFEFEF] text-base font-normal px-8 py-4 border-none outline-none rounded-[10px]
          col-span-1 lg:col-span-2 h-20"/>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between w-full gap-y-5">
          <p className="font-normal text-[#858585] text-base w-full lg:w-[60%] text-center lg:text-left">Please be informed that when you click the Send button Acrosoft Team will process your personal data in accordance with our  for the purpose of providing you with appropriate information.</p>
          <div className="flex items-center gap-4 w-full lg:w-auto justify-center lg:justify-start">
            {buttons.map((btn,index)=>(
              <WhiteBtn key={index} name={btn.name} handle={btn.functionality} border={btn.border} />
            ))}
          </div>
        </div>
        <BlackBtn name={'Send'} icon={rightArrow} handle={''} />
      </form>
    </div>
  );
};

export default ContactForm;
