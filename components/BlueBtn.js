'use client'
import Image from 'next/image'

const BlueBtn = (props) => {
  return (
    <button 
    className="bg-[#1C6EC4] rounded-lg text-white flex items-center gap-1 h-14 px-5 text-sm"
    onClick={props.handle ? props.handle : null}
    >
        {props.name ? props.name : ""}
        {props.icon ? <Image src={props.icon} alt="" /> : ""}
    </button>
  )
}

export default BlueBtn