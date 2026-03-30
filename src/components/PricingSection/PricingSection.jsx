import React, { use } from 'react';

const ctaDataPromice = async () => {
    const res = await fetch('./ctaData.json')
    return res.json()
}

const ctaAllDataPromice = ctaDataPromice()


const PricingSection = () => {
    const ctaAllData = use(ctaAllDataPromice)
    const ctaData = ctaAllData.plans

    return (
        <div className='container mx-auto mt-50'>
            <h2 className='text-5xl font-extrabold text-center py-5'>Simple, Transparent Pricing</h2>
            <p className='text-[#627382] text-center pb-15'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='grid grid-cols-3'>
                {
                    ctaData.map((item, i) => (
                        <div key={i}>
                            <div className={`card w-96 bg-base-100 shadow-sm border border-black/10 ${item.name === 'Pro' && 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'}`}>
                                <div className="p-5 flex flex-col">

                                    {
                                        item.name === 'Pro' && (
                                            <div className='flex justify-center relative'>
                                                <span className="badge badge-xs badge-warning absolute -top-8.5 p-3 rounded-full">Most Popular</span>
                                            </div>
                                        )
                                    }


                                    <div className="space-y-5">
                                        <h2 className="text-3xl font-bold">{item.name}</h2>
                                        <p>{item.tag}</p>
                                        <span className="text-xl">${item.price}/mo</span>
                                    </div>
                                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                                        {
                                            item.features.map((item, i) => (
                                                <li key={i}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                    <span>{item}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className="mt-6">
                                        <button className={`btn btn-primary rounded-full btn-block ${item.name === 'Pro' && 'bg-white text-blue-800'}`}>Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PricingSection;