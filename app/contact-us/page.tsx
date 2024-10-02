import type { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Contact Us',
};

import Header from "@/components/Header"
import ContactForm from '@/components/ContactForm'
import Offices from '@/components/Offices'
import contact from '@/public/img/contact.png'
import london from '@/public/img/london.png'
import sharjah from '@/public/img/sharjah.png'
import decatur from '@/public/img/decatur.png'
import location from '@/public/img/location.svg'

const page = () => {
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
    <div>
        <Header bgImage={contact} heading={''} />
        <ContactForm />
        <Offices heading={'Our Offices'} data={offices} />
    </div>
  )
}

export default page