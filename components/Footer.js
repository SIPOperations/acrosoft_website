import Image from "next/image"
import Link from "next/link"
import facebook from '../public/img/facebook.svg'
import instagram from '../public/img/instagram.svg'
import twitterX from '../public/img/twitterX.svg'
import linkedin from '../public/img/linkedin.svg'
import youtube from '../public/img/youtube.svg'
import { Fira_Sans } from "next/font/google";

const fira_sans = Fira_Sans({
  weight: ["400"], // Select the weights you need
  subsets: ["latin"],
});

const icons=[facebook,instagram,twitterX,linkedin,youtube]
const projectAndContact=[
  {
    title:'PROJECT',
    content:['Lorem Ipsum','Lorem Ipsum','Lorem Ipsum']
  },{
    title:'PROJECT',
    content:['Lorem Ipsum','Lorem Ipsum','Lorem Ipsum']
  },{
    title:'CONTACT',
    content:['Email','Phone','LinkedIn']
  }
]
const Footer = () => {
  return (
    <div 
    className="px-16 xl:px-40 py-16 text-white flex flex-col items-center 
    text-center xl:text-left gap-y-10 xl:flex-row xl:justify-between" 
    style={{backgroundColor:'#1B1B1B'}}
    >
      <div className="flex items-center xl:items-start flex-col">
        <h1 className="font-extrabold" style={{fontSize:'64px'}}>Collaborate with Us</h1>
        <div className={fira_sans.className}>
          <p className="font-normal text-base pb-5">We offer personalized design services</p>
        </div>
        <ul className="flex items-center gap-5">
          {icons.map((icon,index)=>(
            <li key={index}>
              <Link href=''>
                <Image src={icon} alt="icon" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${fira_sans.className} flex flex-col sm:flex-row items-center gap-16 
      lg:gap-40 xl:gap-16`}>
        {projectAndContact.map((list,index)=>(
          <div key={index} className="flex flex-col gap-7">
            <h1 className="font-normal text-xs">{list.title}</h1>
            <ul className="flex flex-col gap-7">
              {list.content.map((contentLinks,contentIndex)=>(
                <li key={contentIndex}>
                  <Link href='' className="font-normal text-base">{contentLinks}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer