import React from 'react'
import { useState } from 'react'
import Item from './item'
import Recent from './recent'
const BagSum = () => {
    const[price,setPrice] = useState(1)
    const number = 17495 * price
    const total = number.toLocaleString('en-IN')
  return (
    <div>
    <div className="min-h-90 bg-white p-6 md:p-12 flex flex-col md:flex-row gap-10 text-black">
      {/* Left Section - Bag */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-6">Bag</h1>
        <div className=" overflow-y-scroll h-80">
        {<Item price={price} setPrice={setPrice}/>}
        </div>
      </div>

      {/* Right Section - Summary */}
      <div className="w-full md:w-1/3">
        <h2 className="text-2xl font-semibold mb-6">Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between text-gray-800">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>
          <div className="flex justify-between text-gray-800">
            <span>Estimated Delivery & Handling</span>
            <span>₹1,250.00</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{(number + 1250).toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Checkout Buttons */}
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
    <Recent/>
    </div>
  )
}

export default BagSum
