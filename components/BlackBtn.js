'use client'
import Image from "next/image"

const BlackBtn = (props) => {
  return (
    <button 
    className="bg-black rounded-lg text-white flex items-center gap-1 px-4 py-2 text-sm"
    onClick={props.handle ? props.handle : null}
    >
        {props.name ? props.name : ""}
        {props.icon ? <Image src={props.icon} alt="" /> : ""}
    </button>
  )
}

export default BlackBtn