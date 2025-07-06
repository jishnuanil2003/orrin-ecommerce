import React from 'react'
import { searchData } from '../NewArrival/NewArrival'
const Recent = () => {
  return (
    <div>
      <div className="ml-8">
              <h1 className='text-2xl font-semibold mb-6'>Recently Viewed</h1>
              <div className="flex overflow-x-auto whitespace-nowrap gap-12 h-80 items-center">
        {searchData.map((obj) => (
          <div key={obj.name} className="w-48 flex-shrink-0 hover:scale-105">
            <img className='rounded-md' src={obj.image} alt={obj.name} />
            <div className="mt-4 flex justify-between">
              <span className="font-medium text-base">{obj.name}</span>
              <span className="font-medium text-base">${obj.price}</span>
            </div>
          </div>
        ))}
      </div>
            </div>
          </div>
  )
}

export default Recent
