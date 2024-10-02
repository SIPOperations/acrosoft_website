'use client'
import BlackBtn from "./BlackBtn"
import { useRouter } from "next/navigation"

const Description = (props) => {
  const router=useRouter()
  return (
    <div className="flex flex-col gap-y-10 justify-between 
    px-16 xl:px-40 py-20 bg-[#F8F8F8] items-center">
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
        <BlackBtn name={'Apply for this Job'} handle={()=>router.push('/contact-us')} />
    </div>
  )
}

export default Description