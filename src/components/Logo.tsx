import React from 'react'
import Image from 'next/image'
//import ball from ' ../../public/assets/ball.png'
type Props = {}

const Logo = (props: Props) => {
  return (
    <div className='fixed top-12 left-12 z-10 bg-black rounded-xl flex flex-row justify h-24 items-center hover:animate-bounce'>
       {/*<Image src={ball} height={32} width={32} loading='lazy' alt='logo here' />*/}
       { <p className='text-center text-white font-md'>Enter logo here</p>}
    </div>
  )
}

export default Logo