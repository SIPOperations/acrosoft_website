import Image from 'next/image'
import london from '@/public/img/london.png'
import sharjah from '@/public/img/sharjah.png'
import decatur from '@/public/img/decatur.png'
import location from '@/public/img/location.svg'

const Offices = () => {
  const offices=[
    {
        name:'London',
        img:london,
        icon:location,
        address:'3rd floor, 5-8 Dysart St., EC2A 2BX'
    },{
        name:'Sharjah',
        img:sharjah,
        icon:location,
        address:'SAIF Executive Office P8-04-45'
    },{
        name:'Decatur',
        img:decatur,
        icon:location,
        address:'160 Clairemont Ave, Suite 200, GA 30030'
    }
  ]
  return (
    <div className="text-center xl:text-left flex flex-col gap-2 justify-between lg:justify-start
    px-16 xl:px-40 py-20 bg-[#F8F8F8]">
        <h1 className="font-extrabold text-center xl:text-left text-[64px] text-[#1B1B1B]">
            Our Offices
        </h1>
        <div className="flex flex-col lg:flex-row justify-center xl:justify-start items-center gap-y-8
        gap-x-20">
            {offices.map((office,index)=>(
                <div key={index} className='flex flex-col gap-1'>
                    <Image src={office.img} alt={office.name} />
                    <h2 className='font-medium text-[32px]'>{office.name}</h2>
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