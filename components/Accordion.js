'use client'
import Link from 'next/link';
import { SidebarContext } from '@/context/SidebarContext';
import { useContext } from 'react';

const Accordion = (props) => {
  const {sidebarToggle}=useContext(SidebarContext)

  return (
    <div>
      <button
        onClick={()=>props.accordionToggle(props.accordionId)}
        className="w-full p-4 flex justify-center items-center font-normal 
        text-xl text-[#1B1B1B]"
      >
        <span className="font-semibold">{props.title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${props.isTrue ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {props.isTrue && (
        <ul className="flex flex-col gap-5 p-4 bg-white font-normal text-center text-base text-[#858585]">
          {
            props.content.map((link,index)=>(
                <li key={index}>
                  <Link 
                  href={`/${link.toLowerCase().replace(' ','-')}`}
                  onClick={sidebarToggle}>
                    {link}
                  </Link>
                </li>
            ))
          }
        </ul>
      )}
    </div>
  );
};

export default Accordion;
