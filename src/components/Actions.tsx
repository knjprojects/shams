import React from 'react'

type Props = {}

const Actions = (props: Props) => {
  return (
    <div className='fixed top-12 right-12 z-10 bg-gray-300 overflow-hidden'>
        <p className=''>You found a hidden div</p>
        <div className='bg-yellow-400 p-4 transition-all duration-300 transform translate-y-0 hover:translate-y-full'>This is a dropdown</div>
           
        </div>
  )
}

export default Actions