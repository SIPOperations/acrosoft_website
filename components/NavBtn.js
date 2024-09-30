'use client'
import { SidebarContext } from "@/context/SidebarContext"
import { useContext } from "react"

const NavBtn = () => {
  const {isShow,sidebarToggle}=useContext(SidebarContext)
  return (
    <button className="relative flex flex-col items-center lg:hidden" onClick={sidebarToggle}>
        <span 
        className={`h-1 w-12 bg-white 
        ${isShow===0 ?
        'before:absolute before:-top-3 before:left-0 before:h-1 before:w-12 before:bg-white after:-bottom-3' :
        'rotate-45 after:rotate-90'} 
        after:absolute after:left-0 after:h-1 after:w-12 after:bg-white`}></span>
    </button>
  )
}

export default NavBtn