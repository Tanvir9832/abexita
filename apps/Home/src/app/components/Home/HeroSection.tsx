import Image from 'next/image'
import React from 'react'
import { CATEGORIES } from '../../utils/const'
import { ICON } from '../../utils'

const HeroSection = () => {
    const professionals = [
        "/Category/eoc.svg",
        "/Category/foc.svg",
        "/Category/goc.svg",
        "/Category/hoc.svg",
        "/Category/ioc.svg",
        "/Category/joc.svg",
    ];
    return (
        <div className='flex flex-col flex-wrap items-center justify-center'>

            {/* Heading  */}
            <div className='text-center flex flex-col items-center justify-center gap-7 h-[534px]'>
                <h1 className='text-secondary-3 font-bold text-[52px] leading-[72px]'>
                    Looking for a <span className='text-secondary-2'>Business Solution <br />
                        for</span> appointments?
                </h1>
                <p className='font-normal text-[16px] leading-[24px] text-secondary-4'>
                    Ambel simplifies business management by providing tools for scheduling appointments, managing bookkeeping, accepting <br /> payments, sharing resources with customers, sending reminders, and running email marketing campaigns.
                </p>



                <div className='flex flex-col flex-wrap items-center gap-7'>

                    {/* Buttons  */}
                    <div className='relative flex gap-7 items-center justify-center '>
                        <button className='bg-primary text-white rounded-lg py-2 px-4 font-normal text-[16px] leading-[24px]'>
                            Start A Free Trial
                        </button>
                        <button className='flex items-center gap-2 text-white bg-primary-3 rounded-lg py-2 px-4 font-normal text-[16px] leading-[24px]'>
                            <ICON.SEARCH className='w-4 h-4' /> <p>Find Professionals</p>
                        </button>

                        <div className='absolute top-4 left-[-55px]'>
                            <Image src="/trail.svg" alt='trail' width={47} height={62} />
                        </div>
                    </div>


                    {/* Levels  */}
                    <div className='text-tertiary-2 flex ml-[-10px] items-center gap-7 justify-center flex-wrap font-medium text-[12px] leading-[18px]'>
                        <div className='bg-tertiary flex items-center gap-2 rounded-2xl py-[2px] pr-[6px] pl-2'>
                            <ICON.CIRCLE_CHECK className='w-[13px] h-[13px]' />
                            <p>No credit card required</p>
                        </div>
                        <div className='bg-tertiary flex items-center gap-2 rounded-2xl py-[2px] pr-[6px] pl-2'>
                            <ICON.CIRCLE_CHECK className='w-[13px] h-[13px]' />
                            <p>Try one month for free</p>
                        </div>
                    </div>
                </div>


            </div>

            {/* Main image  */}
            <div className="w-full max-w-[1058px]">
                <Image
                    src="mainImage.svg"
                    alt="main image"
                    width={1158}
                    height={628}
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Brands  */}
            <div className='bg-primary-4 w-full flex flex-col items-center justify-center pt-[75px] pb-[72px] gap-14'>
                <p className='text-center font-medium text-base leading-6 text-secondary-5'>Join 10k+ Users, 35+ Solo Practitioners and 60+ Businesses all over the World</p>
                <div className='flex flex-wrap gap-12'>
                    <Image src="/Brands/Aqua.svg" alt='aqua' width={183} height={48} />
                    <Image src="/Brands/logo cfr.svg" alt='logo cfr' width={121} height={58} />
                    <Image src="/Brands/mucha_marketing.svg" alt='mucha_marketing' width={159} height={48} />
                    <Image src="/Brands/skin_precision.svg" alt='skin_precision' width={173} height={48} />
                    <Image src="/Brands/RH-logo.svg" alt='RH-logo' width={58} height={58} />
                    <Image src="/Brands/SpaTruCLINICS.svg" alt='SpaTruCLINICS' width={157} height={48} />
                </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-12'>
                <div className='flex flex-col items-center justify-center gap-12 pt-20'>
                    <div className='flex flex-col gap-5 items-center justify-center'>
                        <p className='font-semibold text-base leading-6 tracking-normal text-center text-tertiary-3'>Industries</p>
                        <h1 className='font-semibold text-4xl leading-9 text-center text-tertiary-4'>
                            Popular Businesses and Practitioners <br />
                            who use Ambel
                        </h1>
                        <h2 className='font-normal text-xl leading-[30px] text-secondary-4 tracking-normal text-center'>
                            Our platform supports a diverse range of professionals, with popular industries; including: <br />
                            healthcare providers, medi spas, salons , fitness coaches, law agencies, beauty specialists, <br />
                            consultants, and therapists.
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-2 w-full justify-between rounded-[29px] border border-primary-5 px-[2px] py-[2px] shadow-[0px_1px_2px_0px_#1018280D] font-semibold text-base leading-5">
                        {CATEGORIES.map((item, index) => (
                            <p
                                key={index}
                                className={`py-2 px-6 rounded-[45px] transition-all ${index === 0
                                    ? "bg-primary text-white"
                                    : "hover:bg-primary hover:text-white cursor-pointer"
                                    }`}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 pb-14">
                    {/* Left Content Section */}
                    <div className="bg-primary p-6 text-white rounded-xl max-w-lg flex justify-between gap-6 relative">
                        <div className='flex flex-col gap-4 items-start'>
                            <button className="bg-white text-tertiary-4 font-medium text-sm py-1 px-3 rounded-2xl">
                                Doctor
                            </button>
                            <h2 className="font-semibold text-2xl leading-9">
                                Business solution for <br /> healthcare providers
                            </h2>
                            <p className="text-sm leading-5">
                                Our software allows Doctors and Medical Professionals to book
                                appointments, manage their patients, provide online prescriptions,
                                overview of their med charts, and automatically send reminders for
                                treatments.
                            </p>
                            <div className="flex items-center gap-2 text-sm">
                                <button className="underline">Learn more</button>
                                <ICON.SQUARE_ARROW_OUT_RIGHT className="w-4 h-4" />
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <Image src="/Category/doc.svg" alt="Doctor Illustration" width={650} height={750} className="" />
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="flex gap-3">
                        {professionals.map((src, index) => (
                            <div
                                key={index}
                                className="w-[70px] md:w-[100px] rounded-2xl overflow-hidden shadow-md"
                            >
                                <Image
                                    src={src}
                                    alt="Professional"
                                    width={100}
                                    height={150}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroSection