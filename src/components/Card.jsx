import React from 'react'

const Card = ({title, value}) => {
  return (
    <div className='p-8 flex flex-col items-center rounded-lg bg-slate-50 shadow-md'>
        <h1 className='text-4xl pb-4'>{value}</h1>
        <p className='text-xl'>{title}</p>
    </div>
  )
}

export default Card