import type { Metadata } from "next";
export const metadata: Metadata = {
  title: 'About Us',
};

import about from '../../public/img/about.png'
import Header from "@/components/Header"
import Mission from '@/components/Mission'
import Values from '@/components/Values'
import Team from '@/components/Team'
import ContactForm from '@/components/ContactForm'

const page = () => {
  return (
    <div>
        <Header bgImage={about} heading={''} />
        <Mission />
        <Values />
        <Team heading={'Meet the Team'} />
        <ContactForm />
    </div>
  )
}

export default page