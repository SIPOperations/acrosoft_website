import Header from "@/components/Header"
import testimonials from "@/public/img/testimonials.png"
// import Sponsers from "@/components/Sponsers"
import ContactForm from "@/components/ContactForm"
import Team from "@/components/Team"
import ClientQuotes from "@/components/ClientQuotes"
import Offices from "@/components/Offices"
import thumbnail1 from "@/public/img/thumbnail1.png"
import thumbnail2 from "@/public/img/thumbnail2.png"
import thumbnail3 from "@/public/img/thumbnail3.png"
import smallLogo2 from "@/public/img/smallLogo2.svg"
import playBtn from "@/public/img/playBtn.svg"
import play2 from "@/public/img/play2.svg"

const page = () => {
  const videos=[
    {
        img:thumbnail1,
        icon:smallLogo2,
        btn:playBtn,
        playIcon:play2,
        address:'Tom Peterson, Founder of Innovative Solutions'
    },{
        img:thumbnail2,
        icon:smallLogo2,
        btn:playBtn,
        playIcon:play2,
        address:'Michael Brown, CEO of Global Enterprises'
    },{
        img:thumbnail3,
        icon:smallLogo2,
        btn:playBtn,
        playIcon:play2,
        address:'Sarah Thompson, COO at Bright Ventures'
    }
  ]
  return (
    <div>
        <Header bgImage={testimonials} heading={'Testimonials'} />
        <Team heading={'What Our Client Say'} heading2={'David Lee'} />
        <ClientQuotes />
        <Offices heading={'Video Testimonials'} data={videos} video={true} />
        {/* <Sponsers /> */}
        <ContactForm />
    </div>
  )
}

export default page