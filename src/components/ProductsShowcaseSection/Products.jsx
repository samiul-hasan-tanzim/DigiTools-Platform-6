import React from 'react';
import Card from './Card';

const Products = ({ allData, handleDataForCart }) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    allData.map(data => <Card key={data.id} data={data} handleDataForCart={handleDataForCart}></Card>)
                }
            </div>
        </div>
    );
};

export default Products;