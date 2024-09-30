'use client'
import { useState,createContext } from "react";
// import { SidebarContext } from '@/context/SidebarContext';
// import { useContext } from 'react';

export const DropdownContext=createContext();
export const DropdownProvider=({children})=>{
    // const {isShow}=useContext(SidebarContext)
    const [isOpen,setIsOpen]=useState(0)
    const dropdownToggle=()=>{
        setIsOpen(isOpen==0 ? 1 : 0)
    }
    return(
        <DropdownContext.Provider value={{isOpen,setIsOpen,dropdownToggle}}>
            {children}
        </DropdownContext.Provider>
    )
}
