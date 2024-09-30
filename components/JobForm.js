'use client'
import search from "../public/img/search.svg";
import Image from "next/image";

const JobForm = (props) => {
  const selectFields=['Workspace Type','Location','Department','Work Type']
  const showPost=()=>{
    console.log(props.posts)
  }
  return (
    <div>
      <button onClick={showPost}>show posts</button>
      <form 
      className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <span className="overflow-hidden rounded-[10px] flex items-center justify-center bg-[#EFEFEF]
        border border-[#E7E7E7] col-span-1 lg:col-span-4">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Jobs"
            className="border-none outline-none font-normal text-base p-4 bg-[#EFEFEF] w-[97%]"
          />
          <button className="border-none outline-none p-4">
            <Image src={search} alt="" />
          </button>
        </span>
        {selectFields.map((field,index)=>(
            <select key={index} name={field} id={field} 
            className="rounded-[10px] bg-[#EFEFEF] border border-[#E7E7E7] outline-none 
            font-normal text-base px-3 py-4 text-[#858585]">
                <option value="none">{field}</option>
                <option value="on-site">On Site</option>
                <option value="remote">Remote</option>
            </select>
        ))}
      </form>
    </div>
  );
};

export default JobForm;
