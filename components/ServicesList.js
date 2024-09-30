import Link from "next/link"
import { DropdownContext } from '@/context/DropdownContext';
import { useContext } from 'react';

const ServicesList = () => {
  const {dropdownToggle}=useContext(DropdownContext)
  const serviceList=[
    'IT Consulting',
    'Software Engineering',
    'Application Services',
    'DevOps',
    'Managed IT Services',
    'Smart Teams',
    'Maintainance & Support',
    'Testing'
  ]
  return (
    <div>
      <ul className="grid grid-rows-10 lg:grid-rows-8 grid-flow-col gap-y-5 gap-x-24 font-normal 
      text-base justify-center lg:justify-start"
      style={{color:'#858585'}}>
        {serviceList.map((service,index)=>(
          <li key={index}>
            <Link href={`${service!=='DevOps' || service!=='Testing' ?
              `/${service.toLowerCase().replace(' ','-')}` : 
              `/${service.toLowerCase()}`}`} onClick={dropdownToggle}>
              {service}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServicesList