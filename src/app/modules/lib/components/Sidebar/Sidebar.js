"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'



const Sidebar = () => {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const pathname = usePathname()
  //const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:mt-20 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-52 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/admin" 
                className={
                  "text-xs uppercase py-3 font-bold block " +
                  (pathname !==  "/admin"
                  ? "text-deep-green hover:text-lightBlue-600"
                  : "bg-green text-white")
                }
                >
                  
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (pathname !== "/admin"
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Products
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/category" 
                 className={
                  "text-xs uppercase py-3 font-bold block " +
                  (pathname !== "/admin/category"
                  ? "text-deep-green hover:text-lightBlue-600"
                  : "bg-green text-white")
                }
                >
                
                    <i
                      className={
                        "fas fa-tools mr-2 text-sm " +
                        (pathname !== "/admin/category"
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Category
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/youtubeLinks" 
                 className={
                  "text-xs items-center uppercase py-3 font-bold block " +
                  (pathname !== "/admin/youtubeLinks"
                    ? "text-deep-green hover:text-lightBlue-600"
                    : "bg-green text-white")
                }
                >
                
                    <i
                      className={
                        "fas fa-tools mr-2 text-sm " +
                        (pathname !== "/admin/youtubeLinks"
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Youtube Videos
                </Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar