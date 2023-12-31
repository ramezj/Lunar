import Link from 'next/link'
import { AdjustmentsHorizontalIcon, LinkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';

export default function Card(props) {
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
      setIsOpen(false)
    }
    function openModal() {
      setIsOpen(true)
    }
    return (
    <div className='duration-300'>
    <Link className="card w-96 shadow-lg bg-white cursor-pointer duration-300 outline-none rounded-lg drop-shadow-2xl" href={props.href}>
    <div className="card-body">
    <h2 className="card-title font-extrabold drop-shadow-lg text-black">{props.title}</h2>
    <br />
    <h1 className="font-medium -mb-3 duration-150 drop-shadow-lg text-black">{props.website}</h1>
    <div className="card-actions justify-end flex gap-6">
      <span className='-mt-8 -mr-2 w-10 h-8 rounded-lg justify-center items-center float-right flex hover:scale-[1.18] duration-300'>
      <ChevronRightIcon className='text-gray-400' width={50} height={50} strokeWidth={'2'}/>
      </span>
    {/* <span className='-mt-6 -mr-2 w-10 h-8 rounded-lg justify-center items-center float-right flex backgroundColor hover:scale-[1.18] duration-300'>
    <Link href={`${props.settings}`} className='drop-shadow-lg float-right flex justify-center'>
    <AdjustmentsHorizontalIcon className='text-white' width={24} height={24} strokeWidth={'2'}/>
    </Link>
    </span>
    <span className='-mt-6 -mr-2 w-10 h-8 rounded-lg justify-center items-center float-right flex backgroundColor hover:scale-[1.18] duration-300'>
    <Link href={`${props.handle}`} className='drop-shadow-lg float-right flex justify-center'>
    <LinkIcon className='text-white' width={22} height={24} strokeWidth={'2.3'}/>
    </Link>
    </span> */}
    </div>
  </div>
</Link>
        </div>
    )
}