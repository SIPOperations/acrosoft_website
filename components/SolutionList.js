import Link from "next/link"

const SolutionList = () => {
  const solutionList=[
    'CRP',
    'CRM',
    'Digital Commerce',
    'Elerning',
    'HR Management',
    'E-Commerce',
    'Portals',
    'AI',
    'Cloud',
    'Robotics'
  ]
  return (
    <div>
        <ul className="grid grid-rows-8 grid-flow-col gap-5 gap-x-24 font-normal text-base"
      style={{color:'#858585'}}>
            {solutionList.map((solution,index)=>(
                <li key={index}>
                    <Link href='#'>
                      {solution}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SolutionList