import React from 'react';

const CTASection = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-50'>
            <div className='container mx-auto p-20 flex flex-col justify-center items-center space-y-5 text-white'>
                <h2 className='text-5xl font-bold'>Ready to Transform Your Workflow?</h2>
                <p className='w-150 text-center'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                <div className='space-x-5'>
                    <button className='btn rounded-full border-none'>Explore Products</button>
                    <button className='btn bg-transparent btn-outline border border-white rounded-full text-white'>View Pricing</button>
                </div>
                <ul className='flex gap-5 list-disc list-inside'>
                    <li className='list-none'>14-day free trial</li>
                    <li className='list-'>No credit card required </li>
                    <li>Cancel anytime</li>
                </ul>
            </div>
        </div>
    );
};

export default CTASection; 