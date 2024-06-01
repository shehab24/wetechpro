import React , {useState, useEffect}  from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import Popup from './Popup'

const MenuManager = () => {



    const [openPopup, setOpenPopup] = useState(false)



  return (
    <>
   
        <div className="lg:flex lg:items-center lg:justify-between w-11/12 p-8 m-8 bg-white">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Category List
                </h2>
            </div>
            <div className="mt-5 flex lg:ml-4 lg:mt-0">
                <span className="hidden sm:block">
                <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
       
                    Edit
                </button>
                </span>

                <span className="ml-3 hidden sm:block">
                <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >

                    View
                </button>
                </span>

                <span className="sm:ml-3">
                <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={()=>setOpenPopup(true)}
                >
                    Add Now
                </button>
                </span>
                <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} />
              
            </div>
            </div>

    </>
  )
}

export default MenuManager
