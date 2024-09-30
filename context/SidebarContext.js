'use client'
import { useState,createContext } from "react";
import { DropdownContext } from './DropdownContext';
import { useContext } from 'react';

export const SidebarContext=createContext();
export const SidebarProvider=({children})=>{
    const [isShow,setIsShow]=useState(0)
    const {setIsOpen}=useContext(DropdownContext)
    const sidebarToggle=()=>{
        setIsShow(isShow==0 ? 1 : 0)
        setIsOpen(0)
    }
    return(
        <SidebarContext.Provider value={{isShow,setIsShow,sidebarToggle}}>
            {children}
        </SidebarContext.Provider>
    )
}