import React, { useState } from 'react';

const Card = ({ data, handleDataForCart }) => {
    const { name, description, price, period, tagType, features, icon } = data
    const [btnText, setBtnText] = useState('Buy Now')

    return (
        <div>
            <div className="card bg-base-100 border border-black/5 shadow-sm min-h-100">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className='border border-black/30 w-12 h-12 rounded-full flex items-center justify-center'>
                            <img width={30} src={icon} alt="" />
                        </div>
                        <span className={`badge badge-xs ${tagType === 'Popular' ? 'badge-soft badge-primary' :
                            tagType === 'Best Seller' ? 'badge-soft badge-warning' :
                                tagType === 'New' ? 'badge-soft badge-success' : null
                            } relative -top-5 left-5`}>{tagType}</span>
                    </div>
                    <div className="flex-1 space-y-2">
                        <h2 className="text-3xl font-bold">{name}</h2>
                        <p>{description}</p>
                        <span className="text-xl">${price}/{period}</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">

                        {
                            features.map((feature, i) => (
                                <li key={i}>
                                    <svg className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{feature}</span>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="mt-6">
                        <button onClick={() => { handleDataForCart(data); setBtnText('Added to cart') }} className="btn btn-primary btn-block">{btnText}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;