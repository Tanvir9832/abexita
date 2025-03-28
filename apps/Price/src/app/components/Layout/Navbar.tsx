import React from 'react'
import { NAV_LINKS } from "../../../../../Home/src/app/utils"
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="flex w-full h-[86px] justify-between shadow-[0px_0px_1.67px_0px_rgba(0,0,0,0.25)] items-center px-14">
            {/* logo */}
            <div>
                <Image src="/logo.svg" alt="abexita logo" width={150} height={39} />
            </div>
            {/* pages  */}
            <div>
                <ul className="flex gap-3 font-medium text-base leading-6">
                    {
                        NAV_LINKS.map((link) => {
                            if (!link.Belong.includes("PRICE")) return;
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
            {/* auth  */}
            <div className="flex gap-4 items-center justify-center">
                <button className="bg-primary rounded-[5px] pt-[6.66px] pr-[13.33px] pb-[6.66px] pl-[13.33px] text-white">
                    <Link href="/">Sign Up</Link>
                </button>
                <button>
                    <Link href="/">Sign In</Link>
                </button>
            </div>
        </nav>
    )
}

export default Navbar