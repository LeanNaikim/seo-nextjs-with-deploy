import React from 'react'
import { Metadata } from 'next'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

export const metadata: Metadata ={
  title: "Susu Shop Contact Us",
  description: "Susu shop is a web application for everone buying.",
  openGraph: {
    title: "Susu Shop Contact Us",
    description: "Susu shop is a web application for everone buying.",
    images: 'https://store.istad.co/media/brand_images/skincare.webp'
  }
}

export default function Contact() {
  return (
    <>
    <div className='text-2xl font-semibold m-8'>Contact US</div>
    <form className="flex max-w-md flex-col gap-4 ml-8 bg-slate-400 p-4 rounded-lg">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="fullname" value="Full Name" />
        </div>
        <TextInput id="fullname" type="text" placeholder="susu" required shadow />
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="address" value="Your Address" />
        </div>
        <TextInput id="address" type="text" required shadow />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </Link>
        </Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>

    {/* <Button /> */}
    </>
  )
}
