import React from 'react'
import { FEATURES, ICON } from '../../utils'

const Features = () => {
    return (
        <div className='flex flex-col gap-20 text-center items-center justify-center bg-primary w-full px-[104px] py-[70px]'>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold text-base leading-6 text-tertiary-5'>Features</p>
                <h2 className='font-semibold text-3xl leading-[54px] tracking-tighter text-center text-white'>Solve all your needs with a single software solution</h2>
                <p className='font-normal text-lg leading-7 tracking-normal text-center pt-2 text-white'>This platform streamlines the entire customer management process, saving <br /> businesses time and increasing efficiency. Trusted by over 60+ businesses.</p>
            </div>
            <div className='grid grid-cols-4 gap-8'>
                {
                    FEATURES.map((feature) => {
                        return (
                            <div className='text-white bg-primary-6 flex flex-col gap-2 rounded-[20px] p-4 py-6' key={feature.id}>
                                <div className='flex justify-between'>
                                    <feature.icon />
                                    <ICON.SQUARE_ARROW_OUT_RIGHT className="w-4 h-4" />
                                </div>
                                <h1 className='font-semibold text-lg leading-7 text-start'>{feature.title}</h1>
                                <h2 className='text-start font-normal text-sm leading-6 p-1'>{feature.description}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Features