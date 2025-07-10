import React, { useState, useContext } from 'react';
import Recent from './recent';
import { CartContext } from '../CartContext';
import { toast } from 'react-toastify';

const BagSum = () => {
  const { cartItems,removeFromCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState(() =>
    Object.fromEntries(cartItems.map(item => [item.id, 1]))
  );
  const number = cartItems.reduce((acc, item) => acc + parseFloat(item.price) * (quantities[item.id] || 1), 0);
  const total = number.toLocaleString('en-IN');

const deleteFields = (id) => {
  removeFromCart(id);
};

  return (
    <div className="bg-white p-6 md:p-12 text-black">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Section - Bag */}
          <div className="w-full md:w-2/3">
            <h1 className="text-2xl font-semibold mb-6">Bag</h1>
            {cartItems.length === 0 ? (
              <p className="text-2xl">Your cart is empty 💨</p>
            ) : (
              <div className="overflow-y-scroll h-80 space-y-6 pr-2">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-center gap-6 border-b pb-6"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-40 h-40 object-contain"
                    />
                    <div className="flex flex-col gap-1 w-full">
                      <h2 className="font-semibold">{item.name}</h2>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                      <p className="font-medium mt-2 text-right md:text-left">
                        <span className="text-gray-500">MRP : ${item.price}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center border rounded-full px-3 py-1">
                        <button className="text-lg" onClick={() =>
                          setQuantities(prev => ({
                            ...prev,
                            [item.id]: Math.max((prev[item.id] || 1) - 1, 1)
                          }))
                        }>-</button>
                        <span className="px-3">{quantities[item.id] || 1}</span>
                        <button className="text-lg" onClick={() =>
                          setQuantities(prev => ({
                            ...prev,
                            [item.id]: (prev[item.id] || 1) + 1
                          }))
                        }>+</button>
                      </div>
                      <button className="text-xl">
                        <ion-icon onClick={()=>{deleteFields(item.id),toast.success("item deleted from cart",{position:'top-center'})}} name="trash-outline"></ion-icon>
                      </button>
                      <button className="text-xl">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Section - Summary */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-semibold mb-6">Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-800">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>
              <div className="flex justify-between text-gray-800">
                <span>Estimated Delivery & Handling</span>
                <span>$10.00</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${(number + 10.00).toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <button className="w-full bg-black text-white py-3 rounded-full hover:opacity-90">
                Purchase More
              </button>
              <button className="w-full bg-black text-white py-3 rounded-full hover:opacity-90">
                Checkout
              </button>
            </div>
          </div>
        </div>

        {/* Recently Viewed Section */}
        <div className="mt-12">
          <Recent />
        </div>
      </div>
    </div>
  );
};

export default BagSum;