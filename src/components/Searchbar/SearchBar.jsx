import { useState } from "react"
export const searchData = [
    {
        name: 'Casio',
        image: 'https://rukminim2.flixcart.com/image/832/832/juvjzbk0/watch/q/v/y/a1666-casio-original-imaffwfygkqth6ec.jpeg?q=70&crop=false'
    },
    {
        name: 'Titan',
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/r/9/h/-original-imahc6eyzemw5cmz.jpeg?q=70&crop=false'
    },
    {
        name: 'Timex',
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/f/m/e/-original-imahc6kjhucrhjwr.jpeg?q=70&crop=false'
    },
    {
        name: 'Fossil',
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/o/l/t/-original-imahczfw7urvzeg6.jpeg?q=70&crop=false'
    },
    {
        name: 'Armaani Exchange',
        image: 'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410501474001/ATFuMpNJU1-469680105001_1.jpg'
    },
    {
        name: 'Citizen',
        image: 'https://www.citizenwatch-global.com/series8/assets/img/top/img_new_photo07.jpg'
    },
    {
        name: 'Seiko',
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q…y/-original-imahc8q4smu72us6.jpeg?q=70&crop=false'
    },
]
const SearchBar = ({search,setSearch}) => {
    // cont[search,setSearch] = useState(false)
    const [value, setValue] = useState('')
    const filter_data = searchData.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
    );
    return (
        <div className="">
            <div onClick={()=>setSearch(!search)} className="bg-[#2a2a2a] flex items-center px-3 py-1 rounded-full text-sm hover:pr-5 transition-all duration-150 ease-in ">
                <ion-icon name="search" className="mr-2 left-5 text-white text-lg"></ion-icon>
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none text-white placeholder-gray-400 w-0 md:w-32"
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
             {value && (
        <div className="absolute md:top-14 bg-white rounded shadow-md w-64 z-10">
          {filter_data.length > 0 ? (
            filter_data.map((obj, index) => (
              <div key={index} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <img src={obj.image} alt={obj.name} className="w-6 h-6 rounded-full mr-3" />
                <p className="text-gray-700">{obj.name}</p>
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
      </div>
    )
}
export default SearchBar;

