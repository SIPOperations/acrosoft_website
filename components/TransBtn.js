'use client'
import Image from "next/image"

const TransBtn = (props) => {
  return (
    <button 
    className="border border-[#1C6EC4] rounded-lg flex items-center gap-1 px-4 py-2 text-sm"
    onClick={props.handle ? props.handle : null}
    >
        {props.name ? props.name : ""}
        {props.icon ? <Image src={props.icon} alt="" /> : ""}
    </button>
  )
}

export default TransBtn