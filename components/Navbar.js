"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/img/whiteLogo.svg";
import WhiteBtn from "./WhiteBtn";
import Dropdown_arrow from "../public/img/Dropdown_arrow.svg";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2"
import { DropdownContext } from "../context/DropdownContext";
import { SidebarContext } from "@/context/SidebarContext";
import { useContext } from "react";
import NavBtn from "./NavBtn";
import Sidebar from "./Sidebar";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router=useRouter()
  const { isOpen,setIsOpen, dropdownToggle } = useContext(DropdownContext);
  const { isShow,setIsShow } = useContext(SidebarContext);
  const navlinks = ["Services", "Careers", "Blogs", "Testimonials", "About Us"];
  const collapse=()=>{
    setIsOpen(0)
    setIsShow(0)
  }
  return (
    <div className="absolute text-white z-10 w-full">
      <div>
        <div className={`px-16 xl:px-40 py-4 flex items-center justify-between`}>
          <Link href='/' onClick={collapse}>
            <Image src={Logo} alt="Logo" />
          </Link>
          <div className="flex items-center gap-7">
            <ul className="hidden lg:flex items-center gap-7">
              {navlinks.map((navlink, index) => (
                <li key={index}>
                  <Link
                    href={
                      navlink !== "Services" ? `/${navlink.toLowerCase().replace(' ','-')}` : ""
                    }
                    className="flex gap-1 text-base"
                    onClick={navlink === "Services" ? dropdownToggle : ""}
                  >
                    {navlink}
                    {navlink === "Services" && (
                      <Image
                        src={Dropdown_arrow}
                        alt=""
                        className={`pt-0.5 ${isOpen === 1 ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <WhiteBtn name="Contact Us" handle={()=>router.push('/contact-us')} />
            <NavBtn />
          </div>
        </div>
      </div>
      <Dropdown />
      <Dropdown2 />
      <Sidebar />
      {(isOpen === 1 || isShow === 1) && (
        <div
          className="fixed top-0 left-0 bg-gray-500 bg-opacity-75 h-screen w-full -z-10"
          aria-hidden="true"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
