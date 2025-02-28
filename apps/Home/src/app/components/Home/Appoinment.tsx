import Link from "next/link";
import { CARDS, ICON, PROFESSIONS, TAGS } from "../../utils";
import Image from "next/image";
// import AnimatedCards from "../AnimatedCard";

const Appoinment = () => {

    return (
        <div className="p-8 px-20 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center rounded-2xl mx-auto py-14 px-20">
                <h2 className="text-2xl font-semibold text-gray-900 text-center">
                    Find and Book Appointments with Local <br /> and International Professionals
                </h2>

                <div className="flex flex-col md:flex-row gap-4 mt-6 w-full">
                    <div className="flex items-center bg-white rounded-full shadow px-6 py-2 flex-1 border-[1px] border-[#D0D5DD] pt-[10px] pr-[16px] pb-[10px] pl-[12px]">
                        <ICON.SEARCH className="text-tertiary-4 w-5" />
                        <input
                            type="text"
                            placeholder="Search Doctor, Therapist, Consultant, Spa"
                            className="flex-1 outline-none px-2 text-gray-700"
                        />
                    </div>
                    <div className="flex items-center bg-white rounded-full shadow px-4 py-2 flex-1 border-[1px] border-[#D0D5DD] pt-[10px] pr-[16px] pb-[10px] pl-[12px]">
                        <ICON.MAP className="text-tertiary-4" />
                        <input
                            type="text"
                            placeholder="Select your location"
                            className="flex-1 outline-none px-2 text-gray-700 rounded-[31px]"
                        />
                    </div>
                    <button className="bg-info text-white px-6 py-2 rounded-full font-normal text-[14px] leading-[24px] shadow">Search</button>
                </div>

                <div className="mt-6 space-y-4">
                    <p className="font-normal text-[16px] leading-[24px] text-secondary-6 text-start">Are you looking for</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {PROFESSIONS.map(profession => (
                            <span key={profession} className="bg-dark font-medium text-[14px] leading-[18px] text-center text-secondary-6 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-300">
                                {profession} ×
                            </span>
                        ))}
                        <button className="bg-info-2 text-info-1 px-3 py-1 rounded-full font-medium text-[14px] leading-[18px]">More</button>
                        <ICON.SETTINGS className="bg-info-3 cursor-pointer text-lg p-1 rounded-[5px]" />
                    </div>
                </div>

                <Link href="/" className="text-info mt-6 text-sm font-medium flex items-center gap-1 text-[14px] leading-[18px] text-center">
                    Explore advanced search <ICON.ARROW_RIGHT />
                </Link>
            </div>

            <div className="flex flex-col gap-10">
                {
                    CARDS.map((card, index) => {
                        return (
                            <div style={{ backgroundColor: card.color, color: card.tColor, zIndex: 10 + index }} className="hidden md:flex justify-between items-center rounded-[32px] w-full py-4 px-4 pl-8 gap-2  md:sticky md:top-28" key={card.id}>
                                <div className="flex flex-col gap-9">
                                    <h1 className="font-semibold text-[36px] leading-[53px] whitespace-pre-line">{card.title}</h1>
                                    <p className="font-normal text-[16px] leading-[28px] whitespace-pre-line">{card.desc}</p>
                                    <div className="flex items-center gap-2">
                                        <p className="underline">Learn more</p>
                                        <ICON.SQUARE_ARROW_OUT_RIGHT className="w-6" />
                                    </div>
                                </div>

                                <div className="max-w-[500px]">
                                    <Image className="object-cover" src={card.img} alt={card.img} width={500} height={200} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="flex flex-wrap items-center space-x-2 mt-10">
                <span className="font-normal text-[18px] leading-[27px] text-tertiary-4">Replace:</span>
                {TAGS.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-info-2 text-info-4 font-medium text-[14px] leading-[18px] text-center px-3 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>

    )
}

export default Appoinment