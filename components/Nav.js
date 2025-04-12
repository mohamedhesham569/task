"use client"
import Image from "next/image"
import logo from "../public/images/Logo.png"
import Link from "next/link"
import down_arow from "../public/images/chevron-down-solid (2).svg"
import menu from "../public/images/bars-solid.svg"
import close from "../public/images/xmark-solid.svg"
import { useState } from "react"

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <>
    <nav className=" " id="nav">
        <div className="flex gap-2 justify-between items-center">
          <Link href="/" className="m-2">
          <Image src={logo} alt="logo" className="m-2"/>
          </Link>
            <ul className="flex gap-1 text-white  nav_ul">
              <Link href="/" className="hidden lg:flex"><li className="">Projects</li></Link>
              <Link href="/"className="hidden lg:flex"><li>Services</li></Link>
              <Link href="/"className="hidden lg:flex"><li>Studio</li></Link>
              <Link href="/"className="hidden lg:flex"><li>Blog</li></Link>
              <Link href="/"className="hidden lg:flex"><li className="flex items-center gap-2">Pages
                  <span><Image src={down_arow} width={10} height={10} alt="down-arrow"/></span>
                </li></Link>
                <Link href="/"className=""><li className="flex cart  text-white items-center gap-2">Cart
                  <div className="cart_num text-black ">
                    <div className="">0</div>
                    
                  </div>
                </li>
                </Link>
            <Link href="/"className="hidden md:flex"><button type="button" className="contact_button text-black">Get in touch</button></Link>
            <li className="lg:hidden" onClick={() => setOpen(!open)}> 
            <Image src={open? close : menu} width={20} height={20} alt="menu-icon"/>
            </li>
            </ul>
            <ul className={open ? "menu text-white" : "hidden"}>
            <Link href="/"className=""><li className="">Projects</li></Link>
            <Link href="/"className=""><li className="">Services</li></Link>
            <Link href="/"className=""><li className="">Studio</li></Link>
            <Link href="/"className=""><li className="">Blog</li></Link>
            <Link href="/"className=""><li className="">shop</li></Link>
            <Link href="/"className=""><li className="">contact</li></Link>
            <Link href="/"className="more_templets"><li >more templates</li></Link>
            </ul>
            
        </div>
    </nav>
    </>
  )
}

export default Nav