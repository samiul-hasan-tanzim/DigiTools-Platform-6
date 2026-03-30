import React from 'react';

const FooterSection = () => {
    return (
        <div className='bg-[#101727]'>
            <div className='container mx-auto'>
                <div className='flex justify-between py-20'>
                    <div className='text-white space-y-3'>
                        <h2 className='text-3xl font-bold'>DigiTools</h2>
                        <p className='text-sm text-white/80 w-90'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className='space-y-3'>
                        <h5 className='text-xl text-white'>Product</h5>
                        <p className='text-white/80'>Features</p>
                        <p className='text-white/80'>Pricing</p>
                        <p className='text-white/80'>Templates</p>
                        <p className='text-white/80'>Integrations</p>
                    </div>
                    <div className='space-y-3'>
                        <h5 className='text-xl text-white'>Product</h5>
                        <p className='text-white/80'>Features</p>
                        <p className='text-white/80'>Pricing</p>
                        <p className='text-white/80'>Templates</p>
                        <p className='text-white/80'>Integrations</p>
                    </div>
                    <div className='space-y-3'>
                        <h5 className='text-xl text-white'>Product</h5>
                        <p className='text-white/80'>Features</p>
                        <p className='text-white/80'>Pricing</p>
                        <p className='text-white/80'>Templates</p>
                        <p className='text-white/80'>Integrations</p>
                    </div>
                    <div className='space-y-3'>
                        <h5 className='text-xl text-white'>Social Link</h5>
                        <div className='flex gap-3'>
                            <div className='w-8 h-8 bg-white p-2 rounded-full'>
                                <img src="https://cdn-icons-png.flaticon.com/512/1400/1400829.png" alt="" />
                            </div>
                            <div className='w-8 h-8 bg-white p-2 rounded-full'>
                                <img src="https://cdn-icons-png.flaticon.com/512/3488/3488299.png" alt="" />
                            </div>
                            <div className='w-8 h-8 bg-white p-2 rounded-full'>
                                <img src="https://cdn-icons-png.flaticon.com/512/11823/11823292.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default FooterSection;