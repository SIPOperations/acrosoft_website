import Image from 'next/image'

const Offices = (props) => {
  return (
    <div className={`text-center xl:text-left flex flex-col gap-2 justify-between lg:justify-start
    px-16 xl:px-40 py-20 ${props.video ? '' : 'bg-[#F8F8F8]'}`}>
        <h1 className="font-extrabold text-center xl:text-left text-[64px] text-[#1B1B1B]">
            {props.heading}
        </h1>
        <div className="flex flex-col lg:flex-row justify-center xl:justify-start items-center gap-y-8
        gap-x-20">
            {props.data.map((office,index)=>(
                <div key={index} className={`flex flex-col gap-1 
                ${props.video ? 'group items-center cursor-pointer relative' : ''}`}>
                    {!props.video ? 
                    <Image src={office.img} alt={office.name ? office.name : ''} /> :
                     <div className='relative'>
                         <Image src={office.img} alt={office.name ? office.name : ''} />
                         <div className='h-full w-full absolute top-0 left-0 group-hover:flex 
                         items-center justify-center hidden'>
                             {
                                (office.btn && office.playIcon) &&
                                <div 
                                className='h-full w-full absolute top-0 left-0 flex items-center 
                                justify-center'>
                                    <div className='relative'>
                                        <Image src={office.btn} alt='' />
                                        <Image src={office.playIcon} alt=''
                                        className='absolute top-2.5 left-4' />
                                    </div>
                                </div>
                             }   
                         </div>   
                     </div>}
                    {office.name && <h2 className='font-medium text-[32px]'>{office.name}</h2>}
                    <div className='flex items-center justify-center xl:justify-start gap-2'>
                        <Image src={office.icon} alt='' />
                        <p className='font-normal text-base text-[#858585]'>{office.address}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Offices