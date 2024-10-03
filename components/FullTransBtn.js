import Image from "next/image"

const FullTransBtn = (props) => {
  return (
    <button 
    className="flex items-center gap-1 text-[#858585] text-sm"
    onClick={props.handle ? props.handle : null}
    >
        {props.icon ? <Image src={props.icon} alt="" /> : ""}
        {props.name ? props.name : ""}
    </button>
  )
}

export default FullTransBtn