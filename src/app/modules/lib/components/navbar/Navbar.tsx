"use client";
import React, { useState, useEffect } from "react";
import Image from "../image/Image";
import Link from "next/link";
import { paths } from "../../utility/paths";
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname()


  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-24">
      <li className="p-1 font-semibold">
      <Link href={paths.homepage} onClick={toggleNav} className={`flex items-center px-2 hover:text-green pointer ${paths.homepage == pathname && 'text-green bold  border-b-2 border-deep-green'}`}>Home</Link>
      </li>
      <li className="p-1 font-semibold">
      <Link href={paths.products} onClick={toggleNav} className={`flex items-center px-2 hover:text-green pointer ${paths.products == pathname && 'text-green bold  border-b-2 border-deep-green'}`}>Products</Link>
        {/* <a href="#" className="flex items-center">
          Products
        </a> */}
      </li>
      <li className="p-1 font-semibold">
      <Link href={paths.about} onClick={toggleNav} className={`flex items-center px-2 hover:text-green pointer ${paths.about == pathname && 'text-green bold  border-b-2 border-deep-green'}`}> About Us</Link>
      </li>
      <li className="p-1 font-semibold">
      <Link href={paths.contactUs} onClick={toggleNav} className={`flex items-center px-2 hover:text-green pointer ${paths.contactUs == pathname && 'text-green bold  border-b-2 border-deep-green'}`}> Contact Us</Link>
      </li>
    </ul>
  );

  return (
    <div className="fixed navbar z-20 max-h-[768px] w-full py-2">
      <nav className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-white">
        <div className="px-4 lg:px-8 mx-auto flex items-center justify-between text-deep-green">
        <div className='w-fit'>
        <Link href={paths.homepage} >
        <Image
                  className='w-24 lg:w-20'
                  src='logo.png'
                  alt='logo'
                  type='logo'
              />
        </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {/* <div className="flex items-center gap-x-1">
              <button className="text-deep-green bg-transparent border border-green rounded-md px-3 py-1 text-sm">
                Log In
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-deep-green rounded-md px-3 py-1 text-sm">
                Sign in
              </button>
            </div> */}
            <button
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              onClick={toggleNav}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {openNav && (
          <div className="lg:hidden">{navList}</div>
        )}
      </nav>
    </div>

);
}

export default Navbar;