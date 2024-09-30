import Listing2 from "./Listing2"

const Values = () => {
  const values=[
    {
        name:'Innovation',
        text:"Constantly pushing the boundaries of what's possible."
    },{
        name:'Collaboration',
        text:'Working together with clients and within our team to create the best solutions.'
    },{
        name:'Integrity',
        text:'Delivering on our promises with transparency and accountability.'
    },{
        name:'Customer-Centricity',
        text:'Ensuring that the user experience is at the heart of everything we build."'
    }
  ]
  return (
    <div className="text-center xl:text-left flex flex-col gap-y-28 xl:flex-row justify-between 
    px-16 xl:px-40 py-20 bg-[#F8F8F8]">
        <Listing2 myList={values} heading={'Our Values'} icon={false} hover={false} />
    </div>
  )
}

export default Values