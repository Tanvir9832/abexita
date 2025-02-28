import { ICON } from "apps/Home/src/app/utils";


const HeroSection = () => {
    const plans = [
        {
            title: 'Pay As You Go',
            price: '10%',
            description: '10% from your customer payment',
            icon: ICON.LAYERS,
            features: [
                'Only pre-paid booking',
                'Both practitioner and Organization',
                'Up to 5 practitioners in organization',
                '2 staff members are allowed',
                'Basic chat and email support'
            ]
        },
        {
            title: 'Practitioner',
            price: '$49',
            description: '1 practitioner license/monthly',
            icon: ICON.LAYER_2,
            features: [
                'All booking options',
                'All schedule Feature',
                'Individual single practitioner license',
                '3 staff members are allowed',
                'Unlimited email marketing'
            ]
        },
        {
            title: 'Enterprise',
            price: '$39',
            description: 'Practitioner Number',
            icon: ICON.LAYERS,
            features: [
                'All booking options',
                'Only for Organization',
                'Unlimited practitioners and staff',
                'Customizable 6 page website',
                'E-commerce functionality'
            ]
        }
    ];

    return (
        <>
            <div className="relative bg-primary-2 w-full ">

                {/* //! first section */}
                <div className="flex flex-col items-center justify-center gap-6 py-20 pb-72">
                    <p className="bg-primary-3 py-1 px-3 rounded-2xl text-primary-4 text-sm leading-5 font-medium">Pricing plans</p>
                    <h1 className="text-5xl leading-[60px] font-semibold text-center text-primary-5">
                        Let’s Get Started. <br />
                        We’ve got a Plan that’s perfect for you.
                    </h1>
                    <p className="text-[20px] leading-[30px] font-normal text-center text-secondary-2">Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
                    <div className="bg-secondary-3 font-semibold text-[16px] leading-[24px] p-1 rounded-lg flex  mt-4 items-center">
                        <p className="py-2 px-12 text-center">Monthly</p>
                        <p className="py-2 px-[56px] text-center rounded-lg bg-white">Yearly</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center relative z-10 gap-6 px-10 lg:px-40 -mt-56">
                {plans.map((plan, index) => (
                    <div key={index} className="shadow-lg rounded-2xl p-6 text-center max-w-[350px] border border-[#EAECF0] bg-white">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-center mb-4">
                                <ICON.CIRCLE_CHECK className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="font-semibold text-[20px] leading-[30px] text-primary-4">{plan.title}</h3>
                            <p className="font-semibold text-[48px] leading-[60px] text-tertiary-4">{plan.price}</p>
                            <p className="font-normal text-[16px] leading-[24px] text-secondary-4">{plan.description}</p>
                        </div>

                        <ul className="text-left space-y-2 mb-10 mt-6">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center space-x-2">
                                    <ICON.CIRCLE_CHECK className="text-teal-600 w-5 h-5" />
                                    <span className="text-gray-600">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="bg-primary text-white rounded-md w-full py-2 hover:bg-primary-dark transition">
                            Get Started
                        </button>
                    </div>
                ))}
            </div>

            <div className="bg-secondary-5 p-16 flex items-center justify-between my-20 mb-32">
                <div>
                    <h1 className="text-primary font-semibold text-[30px] leading-[38px]">Start your 30-day free trial</h1>
                    <p className="text-primary font-normal text-[20px] leading-[30px]">Join over 100+ practitioner and organization already growing with Ambel</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="text-primary py-3 px-5 rounded-lg bg-white border border-primary">Learn more</button>
                    <button className="bg-primary text-white py-3 px-5 rounded-lg">Get started</button>
                </div>
            </div>
        </>
    )
}

export default HeroSection