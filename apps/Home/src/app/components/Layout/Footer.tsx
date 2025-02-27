import React from 'react'
import { FOOTER_CONST } from '../../utils/const'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
    return (
        <div className=' bg-primary px-32 text-sm leading-[21px] font-normal text-white'>
            {/* //! items  */}
            <div className='flex justify-between flex-wrap pt-6'>
                {
                    FOOTER_CONST.map((footer) => {
                        return (
                            <div className='flex flex-col gap-6 bas' key={footer.id}>
                                <h1 className='font-semibold text-base leading-6 underline underline-offset-8 decoration-2'>{footer.title}</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        footer.children.map((item) => {
                                            return (
                                                <div key={item.id}>
                                                    <li >
                                                        {item.name}
                                                    </li>
                                                </div>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>

            {/* //! social media icons */}
            <div className='w-full flex items-center gap-9 py-6'>
                <p className='text-base leading-6'>
                    Follow Us
                </p>
                <div className="flex items-center gap-3">
                    <Twitter className="w-8 h-6 text-white" />
                    <Linkedin className="w-8 h-6 text-white" />
                    <Facebook className="w-8 h-6 text-white" />
                    <Instagram className="w-8 h-6 text-white" />
                    <Youtube className="w-8 h-6 text-white" />
                </div>
            </div>

            
            <div className='flex py-8 justify-between border-t-[1px] border-white/20'>
                <div>
                    Copyright &copy; 2022. Ambel. All rights reserved.
                </div>
                <div className='flex gap-5'>
                    <p>Privacy Policy</p>
                    <p>Cookies</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </div>
    )
}

export default Footer