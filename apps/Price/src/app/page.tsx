import Image from "next/image";
import { NAV_LINKS } from "../../../Home/src/app/utils/navLinks"
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Index() {
  return (
    <div>
      <nav className="flex items-center justify-between py-4 px-8 shadow-sm bg-white">
        <div>
          <div className="flex items-center space-x-4">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} className="h-8" />
          </div>
          <div>
            <ul className="flex gap-3 font-medium text-base leading-6">
              {
                NAV_LINKS.map((link) => {
                  return (

                    <li className="flex items-center justify-center gap-[6.66px] text-secondary" key={link.id}>
                      <Link href={link.href}>{link.page}</Link>
                      <div>
                        {
                          link.children && (
                            <ChevronDown className="w-[12.664px] h-[12.332px] border-secondary" />
                          )
                        }
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-teal-900 text-white rounded-md px-4 py-2 hover:bg-teal-800">Sign Up</button>
          <span className="text-gray-600 hover:text-gray-800 cursor-pointer">Sign in</span>
        </div>
      </nav>
    </div>
  );
}
