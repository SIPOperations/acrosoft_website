import services from '../public/img/services.png'
import topLightLogo from '../public/img/newlightLogo.svg'
import bottomLightLogo from '../public/img/newlightLogo2.svg'
import openlink from '../public/img/openlink.svg'
import Listing2 from './Listing2'
import SmallImage from './SmallImage'

const Services = () => {
  const images=[services,topLightLogo,bottomLightLogo]
  const servicelist=[
    {
      name:'Graphic Designing',
      open:openlink
    },{
      name:'React JS',
      open:openlink
    },{
      name:'Microservices and Web services',
      open:openlink
    },{
      name:'AWS and Azure cloud services',
      open:openlink
    },{
      name:'Dashboarding and reporting',
      open:openlink
    },
  ]
  return (
    <div className="text-center xl:text-left flex flex-col gap-y-28 xl:flex-row gap-10 
    px-16 xl:px-40 py-20 bg-[#F4F9FF] items-center">
        <Listing2 myList={servicelist} heading={'Our Services'} icon={true} hover={true} />
        <div className='p-16'>
          <SmallImage myImage={images} />
        </div>
    </div>
  )
}

export default Services