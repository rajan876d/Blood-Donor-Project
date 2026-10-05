"use client"
import React from 'react'
import navMenu from '@/constants/navMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


function Nav() {
    const pathname = usePathname();
    console.log(pathname);
  return (
  <nav className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
       {navMenu.map((navItem)=>{
        const isActive = pathname ==navItem.route;
        return(
        <li>
          <Link href={navItem.route} 
            className={`${isActive? "text-red-600":""} block py-2 px-3 text-black text-heading hover:text-green-400`}>
            {navItem.label}
          </Link>
        </li>
       );
       })}
      </ul>
    </nav>
  )
}

export default Nav;