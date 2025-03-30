import React from 'react'

const FeatureCard = ({title , heading , pic}) => {
  return (
    <div className='flex flex-col items-center justify-between gap-3 p-5 bg-white '>
      <h2 className=' text-md'>{title}</h2>
      <p className='text-xl font-medium'>{heading}</p>
      <img src={pic} alt="" className='w-24 h-24 rounded-full'/>
    </div>
  )
}

export default FeatureCard