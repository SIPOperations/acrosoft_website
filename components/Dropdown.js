'use client'
import ServicesList from './ServicesList'
import SolutionList from './SolutionList'
import { DropdownContext } from '@/context/DropdownContext';
import { useContext } from 'react';

const Dropdown = () => {
  const {isOpen}=useContext(DropdownContext)
  return (
    <div role="list" className={`${isOpen ? 'hidden lg:flex px-16 xl:px-40 py-20' : 'h-0'} 
    overflow-hidden divide-x-2 divide-gray-400/60 items-center absolute -bottom-6.5 
    w-full bg-white justify-center dropdown hidden lg:flex px-16 xl:px-40 h-0`}>
      <div className='flex flex-col gap-5 pr-10 xl:pr-28'>
        <h1 className='font-normal text-xl' style={{color:'#1B1B1B'}}>Services</h1>
        <ServicesList />
      </div>
      <div  className='flex flex-col gap-y-5 gap-x-10 px-10 xl:px-28'>
        <h1 className='font-normal text-xl' style={{color:'#1B1B1B'}}>Solutions</h1>
        <SolutionList />
      </div>
      <div  className='flex flex-col gap-y-5 gap-x-10 px-10 xl:px-28'>
        <h1 className='font-normal text-xl' style={{color:'#1B1B1B'}}>Technologies</h1>
        <ServicesList />
      </div>
    </div>
  );
};

export default Dropdown;
