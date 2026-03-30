import React from 'react';

const Cart = ({ cartData, setCartData }) => {

    const totalPrice = cartData.reduce((sum, price) => sum + price.price, 0)

    const handelRemoveItems = (cart) => {
        const newCarts = cartData.filter(i => i.id !== cart.id)
        setCartData(newCarts)
    }

    return (
        <div>
            {
                cartData.length > 0 ?
                    <div>
                        <h2 className='text-2xl font-bold mb-4'>Your Cart</h2>


                        <div className='bg-white space-y-5 border border-black/10 shadow rounded-2xl p-5'>
                            {
                                cartData.map(i => (
                                    <div key={i.id} className=' bg-gray-50 flex justify-between items-center p-5 rounded-2xl'>
                                        <div className='flex justify-between items-center gap-5'>
                                            <div className='bg-white border border-black/10 rounded-full w-12 h-12 flex justify-center items-center'>
                                                <img width={30} src={i.icon} alt="" />
                                            </div>
                                            <div>
                                                <h4>{i.name}</h4>
                                                <p>{i.price}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p onClick={() => handelRemoveItems(i)} className='cursor-pointer'>Remove</p>
                                        </div>
                                    </div>
                                ))
                            }
                            <div>
                                <div className='flex justify-between'>
                                    <p>Total:</p>
                                    <p>{totalPrice}</p>
                                </div>
                                <button onClick={() => setCartData([])} className='btn w-full p-7 text-lg rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div> :
                    <div className="flex flex-col items-center justify-center h-60 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                        <img width={150} src="https://cdn-icons-png.flaticon.com/512/13637/13637462.png" alt="" />
                        <h3 className="text-xl font-semibold text-gray-700">Your cart is empty</h3>
                        <p className="text-gray-500 mt-2 text-center px-4">
                            Looks like you haven’t added any products yet. Start browsing and add items to your cart!
                        </p>
                    </div>
            }
        </div>
    );
};

export default Cart;