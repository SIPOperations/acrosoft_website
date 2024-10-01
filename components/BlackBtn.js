'use client'
import Image from "next/image"

const BlackBtn = (props) => {
  return (
    <button 
    className="bg-black rounded-lg text-white flex items-center gap-1 h-14 px-5 text-sm"
    onClick={props.handle ? props.handle : null}
    >
        {props.name ? props.name : ""}
        {props.icon ? <Image src={props.icon} alt="" /> : ""}
    </button>
  )
}

export default BlackBtn