import type { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Contact Us',
};

import Header from "@/components/Header"
import ContactForm from '@/components/ContactForm'
import Offices from '@/components/Offices'
import contact from '@/public/img/contact.png'

const page = () => {
  return (
    <div>
        <Header bgImage={contact} heading={''} />
        <ContactForm />
        <Offices />
    </div>
  )
}

export default page