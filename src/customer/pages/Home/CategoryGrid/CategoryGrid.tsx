import React from 'react'

const CategoryGrid = () => {
  return (
    <div className='grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>
        
        <div className='col-span-3 row-span-12 text-white'>
            <img 
            src="https://m.media-amazon.com/images/I/71jF7678loL._SX569_.jpg" alt="" />
        </div>
        <div className='col-span-2 row-span-6 text-white'>
            <img 
            src="https://m.media-amazon.com/images/I/61hYT677lhL._AC_UL960_FMwebp_QL65_.jpg" alt="" />
        </div>
        
    </div>
  )
}

export default CategoryGrid