import React from 'react'
import video from '../../assets/videoplayback.mp4'

const HeroSection = () => {
    return (
        <div className="relative">
            <div className="absolute top-70 left-6 md:inset-1 flex flex-col items-center justify-center text-white z-0 px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-2  ">Welcome to ORRIN</h1>
                <p className="text-md md:text-xl mb-6">Explore our exclusive watch collection</p>
                <div className="flex space-x-4">
                    <button className="bg-gray-100 text-base md:text-lg text-black px-4 py-2 md:px-6 md:py-2 border-0 rounded-md font-semibold hover:bg-gray-100">Shop Now</button>
                    <button className="bg-transparent border text-base md:text-lg border-white px-4 py-2 md:px-6 md:py-2 rounded-md font-semibold hover:bg-white hover:text-black transition">Learn More</button>
                </div>
            </div>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full md:h-3/6 h-screen object-cover"
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="bg-stone-400 md:h-15 h-22 md:text-lg text-xs text-white flex flex-col md:flex-row md:items-center items-center md:justify-around  text-center md:font-regular gap-2">
                <p className='pt-2 md:pt-0'>Curated for discerning collectors - Exceptional timepeices of true significance and value, nothing regular </p>
                <div className="flex gap-4 cursor-pointer">
                <button className='border-2 rounded-md border-white text-xs md:text-base text-white px-2 py-1 md:px-4 md:py-1'>Accept cookies</button>
                <button className='border-0 rounded-md bg-white text-xs md:text-base text-black px-2 py-1 md:px-4 md:py-1'>Manage cookies</button>
                <button className='border-2 rounded-md border-white text-xs md:text-base text-white px-2 py-1 md:px-4 md:py-1'>Reject cookies</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
