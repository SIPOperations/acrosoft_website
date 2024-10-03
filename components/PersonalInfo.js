import BlackBtn from "./BlackBtn";
import FullTransBtn from "./FullTransBtn";
import deleteIcon from "@/public/img/deleteIcon.svg";

const PersonalInfo = (props) => {
  return (
    <div className="w-full flex flex-col gap-7">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-extrabold text-5xl text-[#1B1B1B]">
          {props.heading}
        </h1>
        <FullTransBtn name="Clear" icon={deleteIcon} />
      </div>
      {/* <form className="flex flex-col items-center lg:items-start gap-5 w-full mt-5"> */}
        {props.inputFields && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 w-full">
            {props.inputFields.map((field, index) => (
              <span key={index}
              className={`flex flex-col ${
                field.name === "phone" || field.name === "address"
                  ? "col-span-1 lg:col-span-2"
                  : ""
              }`}>
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                value={field.value}
                onChange={props.handleChange}
                placeholder={field.placeholder}
                className={`bg-[#EFEFEF] text-base font-normal px-8 py-4 border-none outline-none 
                rounded-[10px] ${
                  field.name === "phone" && field.name === "address"
                    ? "col-span-1 lg:col-span-2"
                    : ""
                }`}
              />
              {
                  field.label!=='' &&
                  <label htmlFor={field.name}
                  className="font-normal text-base text-[#858585]">
                    {field.label}
                  </label>
              }
              </span>
            ))}
          </div>
        )}
        {
            props.addMore && 
            <div 
            className="flex flex-col lg:flex-row items-center justify-between w-full">
                {props.addMore.map((desc,index2)=>(
                    <div key={index2}
                    className="w-2/5 flex items-center justify-between">
                        <p>{desc}</p>
                        <BlackBtn name='+ Add More' />
                    </div>
                ))}
            </div>
        }
        {props.textArea && (
          <textarea
            id={props.name}
            name={props.name}
            value={props.value}
            placeholder={props.textArea}
            onChange={props.handleChange}
            rows='8'
            cols='174'
            className="bg-[#EFEFEF] text-base font-normal px-8 py-4 border-none outline-none rounded-[10px]
        col-span-1 lg:col-span-2"
          />
        )}
        {props.file && (
          <input type="file" name={props.file.name} id={props.file.name}
          onChange={props.handleFileChange} />
        )}
        
      {/* </form> */}
    </div>
  );
};

export default PersonalInfo;
