import React from 'react'

function Header() {
  return (
    <div
      id='Header'
      className='mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify'
    >
      <div className='flex flex-col'>
        <code className='text-white'>Hi, my name is</code>
        <code className='text-[#9E1B32] text-7xl mt-5'>James Daniel</code>
      </div>
      <button className='border border-crimson text-white mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-white w-1/2'>
        <code>Let's Work Together</code>
      </button>
    </div>
  )
}

export default Header
