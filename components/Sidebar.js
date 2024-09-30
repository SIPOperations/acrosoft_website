"use client";
import { SidebarContext } from "../context/SidebarContext";
import {DropdownContext} from '../context/DropdownContext';
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Dropdown_arrow from '../public/img/Dropdown_arrowBlack.svg'

const Sidebar = () => {
    const { dropdownToggle } = useContext(DropdownContext);
    const { isShow,sidebarToggle } = useContext(SidebarContext);
    const navlinks = ["Services", "Careers","Blogs","Testimonials","About Us"];
  return (
    <div
      className={`${isShow ? "w-72 py-3" : "w-0"}
      overflow-hidden flex flex-col items-center absolute 
      right-0 md:right-16 -bottom-6.5 bg-white lg:hidden`}
    >
      <ul role="list"
       className="flex flex-col items-center gap-1 text-black w-full divide-y divide-black">
        {navlinks.map((navlink, index) => (
          <li key={index} className="w-full">
            <Link
              href={navlink !== "Services" ? `/${navlink.toLowerCase().replace(' ','-')}` : ""}
              className="flex gap-1 text-base w-full justify-center py-3"
              onClick={navlink === "Services" ? dropdownToggle : sidebarToggle}
            >
              {navlink === "Services" && (
                <Image
                  src={Dropdown_arrow}
                  alt=""
                  className={`pt-0.5 rotate-90`}
                />
              )}
              {navlink}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
