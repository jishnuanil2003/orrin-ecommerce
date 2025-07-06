import React from 'react'

const Item = ({price,setPrice}) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-6">
          <img
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/c/m/l/-original-imahcmf9py8fdb5t.jpeg?q=70"
            alt="Nike Air Max Dn"
            className="w-40 h-40 object-contain"
          />

          <div className="flex flex-col gap-1 w-full">
            <h2 className="font-semibold">A|X ARMANI EXCHANGE</h2>
            <p className="text-sm text-gray-600">Men's Watche</p>
            <p className="text-sm text-gray-600">Black/Dark Smoke Grey/Black/white Strike</p>
            <p className="font-medium mt-2 text-right md:text-left">
              <span className="text-gray-500">MRP :</span> ₹17,495.00
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center border rounded-full px-3 py-1">
            <button className="text-lg" onClick={()=>setPrice(price-1)}>-</button>
            <span className="px-3">{price}</span>
            <button className="text-lg" onClick={()=>setPrice(price+1)}>+</button>
          </div>
          <button className="text-xl"><ion-icon name="trash-outline"></ion-icon></button>
          <button className="text-xl"><ion-icon name="heart-outline"></ion-icon></button>
        </div>
        </div>
    </div>
  )
}

export default Item
