import React from 'react'

const CardPlus = ({title, value}) => {
  return (
    <div className='p-8 flex flex-col items-center text-white rounded-lg bg-blue-700 shadow-md'>
        <h1 className='text-4xl pb-4'>{value}</h1>
        <p className='text-xl'>{title}</p>
    </div>
  )
}

export default CardPlus