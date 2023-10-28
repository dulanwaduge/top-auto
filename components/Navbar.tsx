"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton';
import addCar from '@/utils/mongoMethods'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href="/" className='flex justify-center items-center -my-10'>
                <Image 
                    src="/top-auto_logo.png"
                    alt="Top Auto Logo"
                    height={100}
                    width={190}
                    className='object-contain '
                />
            </Link>
            <div className='flex space-x-5'>
            <CustomButton
                title="Add Listing"
                btnType="button"
                containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]" 
                handleClick={addCar}
            />
            <CustomButton
                title="Sign In"
                btnType="button"
                containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]" 
            />
            </div>
        </nav>
    </header>
  )
}

export default Navbar