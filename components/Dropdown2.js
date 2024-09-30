'use client'
import { DropdownContext } from '@/context/DropdownContext';
import { useContext,useState } from 'react';
import Accordion from './Accordion'

const Dropdown2 = () => {
    const [openAccordionId, setOpenAccordionId] = useState(null);
    const dropdownContent=[
    {
        title:'Services',
        content:[
            'IT Consulting',
            'Software Engineering',
            'Application Services',
            'DevOps',
            'Managed IT Services',
            'Smart Teams',
            'Maintainance & Support',
            'Testing'
        ]
    },{
        title:'Solutions',
        content:[
            'ERP',
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
    },{
        title:'Technologies',
        content:[
            'IT Consulting',
            'Software Engineering',
            'Application Services',
            'DevOps',
            'Managed IT Services',
            'Smart Teams',
            'Maintainance & Support',
            'Testing'
        ]
    }
  ]
  const {isOpen}=useContext(DropdownContext)
  const accordionDropdown=(id)=>{
    setOpenAccordionId(openAccordionId===id ? null : id)
  }
  return (
    <div className={`${isOpen ? 'lg:hidden w-72 flex flex-col py-6' : 'w-0'} 
    overflow-hidden items-center absolute right-[18rem] 
    md:right-[22rem] -bottom-6.5 bg-white justify-center text-[#1B1B1B]`}>
        {dropdownContent.map((dropdown,index)=>(
            <Accordion 
            key={index} 
            title={dropdown.title} 
            content={dropdown.content} 
            accordionId={dropdown.title+index} 
            isTrue={openAccordionId===dropdown.title+index}
            accordionToggle={accordionDropdown}
            />    
        ))}
    </div>
  )
}

export default Dropdown2