import Listing2 from "./Listing2"

const Technology = () => {
  const technologies=[
    {
        name:'From Idea to Technology',
        text:'We support enthusiastic companies with new ideas about their business digitalization. As a technology consulting company, we assess the viability of the initial idea and consider the most optimal tech stack for its realization.'
    },{
        name:'From Technology to Project Plan',
        text:'We carry out business analysis to align the validated idea with actual business operations and draw up a relevant development and implementation plan.'
    },{
        name:'From Project Plan to Implementation',
        text:'Sticking to the project plan and the selected engagement model, we design and configure custom software according to the discussed requirements. Upon request, we provide a long-term strategy of post-deployment software maintenance and upgrade.'
    },{
        name:'Expertise rooted in practice',
        text:'The competencies and skills we have today are the result of over two decades of software development practice. Our portfolio constantly expands with new projects and success stories from our customers, and we stay open to new challenges.'
    },{
        name:'Industry knowledge',
        text:'We manage software consulting and development projects across multiple industries. Our team includes experienced business analysts who can effectively translate industry requirements to the language of technical specifications.'
    }
  ]
  return (
    <div className="text-center xl:text-left flex flex-col gap-y-28 xl:flex-row justify-between 
    px-16 xl:px-40 py-20">
        <Listing2 myList={technologies} 
        heading={'Why Technology Consulting \n by Acrosoft'} 
        icon={false} 
        hover={false} />
    </div>
  )
}

export default Technology