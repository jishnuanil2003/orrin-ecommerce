import React, { useState,useContext } from 'react';
import { CartContext } from '../CartContext';
import { toast } from 'react-toastify';

export const searchData = [
    {
        name: 'Casio',
        id: 1,
        price: '125.85',
        desc: 'Youth ( MW-240-1EVDF ) Analog Watch - For Men A1665',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/r/j/k/-original-imagu2pehretyyge.jpeg?q=70'
    },
    {
        name: 'Titan',
        id: 2,
        price: '110.95',
        desc: 'Karishma Analog Watch - For Men NN1639SM02',
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/r/9/h/-original-imahc6eyzemw5cmz.jpeg?q=70&crop=false'
    },
    {
        name: 'Timex',
        id: 3,
        price: '145.00',
        desc: 'Blue Dial Stainless Steel Analog Watch - For Men TW0TG7304',
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/f/m/e/-original-imahc6kjhucrhjwr.jpeg?q=70&crop=false'
    },
    {
        name: 'Fossil',
        id: 4,
        price: '200.00',
        desc: 'MACHINE Analog Watch - For Men FS4487I',
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/o/l/t/-original-imahczfw7urvzeg6.jpeg?q=70&crop=false'
    },
    {
        name: 'A|X',
        id: 5,
        price: '210.00',
        desc: 'Analog Watch - For Men FS8897I',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/1/x/t/-original-imahc6kdhxuj9gsf.jpeg?q=70'
    },
    {
        name: 'Seiko',
        id: 6,
        price: '1000.00',
        desc: 'Analog Watch - For Men SSC573P1',
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/8/p/j/-original-imahamfz4pmey7h7.jpeg?q=70&crop=false'
    },
];

const NewArrival = ({ count, setCount,title}) => {
    const [addedItems, setAddedItems] = useState([]);
    const { cartItems, addToCart } = useContext(CartContext);
    return (
        <div className="">
            <h1 className='md:px-20 px-10 pt-8 md:text-2xl text-lg md:font-medium font-bold'>{title}</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
                {
                    searchData.map((obj, index) => (
                        <div key={index} className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto">
                            <img
                                className="w-full h-64 object-cover"
                                src={obj.image}
                                alt={obj.name}
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">{obj.name}</h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    {obj.desc}
                                </p>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-xl font-bold text-gray-800">${obj.price}</span>
                                    <button
                                        className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 cursor-pointer disabled:opacity-60"
                                        onClick={() => {
                                            addToCart(obj)
                                            setAddedItems(prev => [...prev, index])
                                            toast.success("Item added to cart",{position:'top-center'})
                                        }}
                                    >
                                        {addedItems.includes(index) ? 'Item Added' : 'Add to cart'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default NewArrival;