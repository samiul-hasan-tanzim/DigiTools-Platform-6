import React from 'react';
import Card from './Card';

const Products = ({ allData, handleDataForCart, cartData }) => {
    return (
        <div className='w-11/12 md:w-full mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    allData.map(data => <Card key={data.id} data={data} handleDataForCart={handleDataForCart} cartData={cartData}></Card>)
                }
            </div>
        </div>
    );
};

export default Products;