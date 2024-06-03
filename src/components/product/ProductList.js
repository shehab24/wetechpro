import React, { useState } from 'react';
import Popup from './Popup';

const ProductList = ({ productCategories }) => {
  const [openPopup, setOpenPopup] = useState(false);




  return (
    <div>
      {productCategories && productCategories.map((item , index)=>{
                    return (
    
                        
                        <>
                        
                        <div key={index} className="w-11/12  p-4 mx-8 my-4 bg-white">
                            <div className="lg:flex lg:items-center lg:justify-between">
                            <div className=" w-36">
                                <div className='w-full flex justify-between items-center'>
                                    <img className='w-10 h-10' src={item.image_src}/>
                                    <span className='font-semibold text-base' >{item.name}</span>
                                   
                                </div>
                                </div>
                                <div className="mt-5 flex lg:ml-4 lg:mt-0">
                                    <span className="hidden sm:block">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        onClick={()=> setOpenPopup(true)}
                                    >
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                        </svg>
    
    
    
                                    </button>
                                    </span>
    
                                    <span className="ml-3 hidden sm:block">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
    
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                        <path fillRule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5.5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                                        </svg>
    
    
    
                                    </button>
                                    </span>
    
                                    <span className="sm:ml-3">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    
                                    >
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                                    <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                                    </svg>
    
    
    
                                    </button>
                                    </span>
                                    <span className="sm:ml-3">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                        <path fillRule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clipRule="evenodd" />
                                        </svg>
    
    
    
    
                                    </button>
                                    </span>
                            
                                
                                </div>
                            </div>          
                        </div>
                          
                        </>
                    )
             })}
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}  />
    </div>
  );
};

export default ProductList;
