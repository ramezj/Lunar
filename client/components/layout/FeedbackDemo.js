import { ChevronUpIcon } from "@heroicons/react/24/outline"
import { Fragment, useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import toast, { Toaster } from 'react-hot-toast';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'


export default function FeedbackDemo(props) {
    const [ upvotes, setUpvotes ] = useState(props.upvotes);
    const [ title, setTitle ] = useState(props.title);
    const [ test, setTest ] = useState(props.isUpvoted)
    return (
        <>
        <div key={props.id} className="w-full flex bg-white rounded-lg items-center cursor-pointer duration-300">
        <div className="m-8 flex flex-col items-start text-left">
        <p className='text-lg font-bold text-left text-black'>
        {
            title.length > 20 ? `${title.substring(0,20)}...` : `${title}`
        }       
        </p>
        <p className='text-sm font-regular text-left text-black'>{props.description}</p>
        {
            props.type == "🐛 Bug Report"
            ? 
            <>
            <span class="border border-white/20 mt-2 -mb-1 bg-indigo-700 text-white text-xs font-medium me-2 px-2.5 py-[0.3rem] rounded-md">{props.type}</span>
            </>
            : <></>
        }
        {
            props.type == "💡 Feature Request"
            ? 
            <>
            <span class="border border-white/20 mt-2 -mb-1 bg-yellow-700 text-white text-xs font-medium me-2 px-2.5 py-[0.3rem] rounded-md">{props.type}</span>
            </>
            : <></>
        }
        {
            props.type == "📝 Feedback"
            ? 
            <>
            <span class="border border-white/20 mt-2 -mb-1 bg-green-700 text-white text-xs font-medium me-2 px-2.5 py-[0.3rem] rounded-md">{props.type}</span>
            </>
            : <></>
        }
        </div>
        <div className="m-8 ml-auto">
        <button className={`group hover:bg-blue-700 duration-300 w-[4.5rem] h-12 shadow-sm rounded-lg items-center flex justify-center bg-blue-700 border-none`}>
        <h1 
        className={`m-1 font-bold group-hover:text-white text-white`}>
        {upvotes}</h1>
        <ChevronUpIcon 
        strokeWidth={2.5}
        className={`w-6 h-6 group-hover:text-white text-white`}/>
        </button>
        </div>
        </div>
        </>
    )
}