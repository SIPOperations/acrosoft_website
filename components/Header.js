import Image from "next/image"

const Header = (props) => {
  return (
    <div className={`relative text-center
    ${props.bgImage ? 'consult text-white' : 'h-[36.5rem] text-[#1B1B1B]'}`}>
        {
          props.bgImage && 
          <Image src={props.bgImage} alt="" className="relative -z-10 h-auto w-full object-cover"/>
        }
        <div className={`${props.bgImage ? 'absolute top-0 left-0' : ''} 
        w-full h-full flex flex-col items-center justify-center text-[64px] font-extrabold`}>
            <h1>{props.heading}</h1>
            {
              props.para &&
              <p className={`hidden lg:block font-normal text-xl text-center max-w-[544px]
              ${!props.bgImage ? 'text-[#858585]' : ''}`}>
                {props.para}
              </p>
            }
            {
              props.data &&
              <div className="font-normal text-xl text-center hidden lg:block">
                <div className="flex items-center gap-2">
                  <p className="font-semibold">{props.data.workspace}</p>
                  &bull;
                  <p>{props.data.department}</p>
                  &bull;
                  <p>{props.data.work}</p>
                </div>
                <p>{props.data.location}</p>
              </div>
            }
        </div>
    </div>
  )
}

export default Header