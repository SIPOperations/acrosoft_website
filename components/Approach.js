import Listing2 from "./Listing2"

const Approach = () => {
  const approachs=[
    {
        name:'From Idea to Technology',
        text:'We support enthusiastic companies with new ideas about their business digitalization. As a technology consulting company, we assess the viability of the initial idea and consider the most optimal tech stack for its realization.'
    },{
        name:'From Technology to Project Plan',
        text:'We carry out business analysis to align the validated idea with actual business operations and draw up a relevant development and implementation plan.'
    },{
        name:'From Project Plan to Implementation',
        text:'Sticking to the project plan and the selected engagement model, we design and configure custom software according to the discussed requirements. Upon request, we provide a long-term strategy of post-deployment software maintenance and upgrade.'
    }
  ]
  return (
    <div className="text-center xl:text-left flex flex-col gap-y-28 xl:flex-row justify-between 
    px-16 xl:px-40 py-20 bg-[#F8F8F8]">
        <Listing2 myList={approachs} 
        heading={'Technology Consulting: our Approach'} 
        icon={false} 
        hover={false} />
    </div>
  )
}

export default Approach