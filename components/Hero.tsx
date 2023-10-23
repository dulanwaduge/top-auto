"use client";

import Image from 'next/image';
import {CustomButton} from '@/components'

const Hero = () => {
  const handleScroll = () => {

  }

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find your next car -- quickly and whatever nice line
            </h1>
            <p className='hero__subtitle'>Streamline your car shopping experience whatever whatever nice catchy line</p>
            
            <CustomButton
                title="Explore Cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />    
        </div>
    </div>
  )
}

export default Hero