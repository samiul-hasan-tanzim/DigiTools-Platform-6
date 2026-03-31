import React, { use, useState } from 'react';
import Products from './Products';
import Cart from './Cart';

const ProductsShowcaseSection = ({ dataPromise, handleDataForCart, cartData, setCartData }) => {
    const allData = use(dataPromise)

    const [activeTab, setActiveTab] = useState('products')

    return (
        <div className='container mx-auto mt-25'>
            <div className='flex flex-col items-center text-center space-y-4 my-8'>
                <h2 className='text-4xl md:text-5xl font-extrabold'>Premium Digital Tools</h2>
                <p className='text-[#627382] w-100 md:w-135'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>
            <div className=' mt-4 flex justify-center items-center my-8'>
                <div className="tabs tabs-box  rounded-full px-5">
                    <input onClick={() => setActiveTab('products')} type="radio" name="my_tabs_1" className="tab rounded-full" aria-label="Products" defaultChecked />
                    <input onClick={() => setActiveTab('card')} type="radio" name="my_tabs_1" className="tab rounded-full" aria-label={`Cart (${cartData.length})`} />
                </div>
            </div>

            {
                activeTab === 'products' ? <Products allData={allData} handleDataForCart={handleDataForCart} cartData={cartData}></Products> : <Cart cartData={cartData} setCartData={setCartData}></Cart>
            }


        </div>
    );
};

export default ProductsShowcaseSection;