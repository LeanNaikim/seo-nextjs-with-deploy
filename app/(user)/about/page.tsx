import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata ={
    title: "Susu Shop About Us",
    description: "Susu shop is a web application for everone buying.",
    openGraph: {
      title: "Susu Shop About Us",
      description: "Susu shop is a web application for everone buying.",
      images: 'https://store.istad.co/media/brand_images/skincare.webp'
    }
}

export default function page() {
  return (
    <>
      <div className='text-2xl font-semibold m-8'>About Us</div>
        <div className="flex justify-evenly items-center">
          <img className="w-[500px] h-[300px] ml-8" src="/cosmetic.jpg" alt="Cosmetic" />
          <div className="px-6 py-4 w-[600px]">
            <h5 className="text-2xl text-gray-900 tracking-widest dark:text-white">
              Welcome To susu Shop
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mt-5">
            Start with the story behind your cosmetic brand. Discuss what inspired its creation, the journey it has taken so far, and any significant milestones along the way. Share your brand's mission statement and core values. This could include commitments to using natural ingredients, promoting sustainability, advocating for animal welfare, or empowering individuals through beauty.
            </p>
          </div>
        </div>
        
    </>
  )
}
