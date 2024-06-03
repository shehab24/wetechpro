import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import {  toast } from 'react-toastify';
import $ from 'jquery';
import {ajax_url , nonce} from "../../utils/helper";
import { Bars, Audio  } from 'react-loader-spinner'
import ImageUpload from './ImageUpload';

export default function Popup({openPopup,setOpenPopup  }) {
  const [categoryName, setCategoryName] = useState('');
  const [categoryDesc, setCategoryDesc] = useState('');
  const [categoryImage, setcategoryImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  
  const handleImageSelect = (file)=>{
    setcategoryImage(file);

  }



  // const submitCategory = ()=>{
  //   if(categoryName == "" || categoryDesc == ""){
  //       toast.error('Category Field shouldn,t  be empty', {
  //         autoClose: 2000,
  //     });
  //   }else{
  //     setLoading(true);
  //     const formData = new FormData();
  //     formData.append('action', 'create_category_request');
  //     formData.append('nonce', nonce);
  //     formData.append('categoryName', categoryName);
  //     formData.append('categoryDesc', categoryDesc);
  //     if (categoryImage) {
  //       formData.append('categoryImage', categoryImage);
  //     }
  //     $.ajax({
  //       url: ajax_url, 
  //       type: 'post', 
  //       data: formData,
  //       contentType: false,
  //       processData: false,
  //       success(result) {
  //        if(result.data.status){
  //         setLoading(false);
  //           toast.success('Category added Successfully', {
  //             autoClose: 2000,
  //         });
  //         setState(!state)
  //         setCategoryName("");
  //         setCategoryDesc("");
  //         setPreview(null);
  //        }
  //       },
  //       error(xhr, status, error) {
  //         console.log(error)
  //       }
  //     });
  
  //     }

  //   }
   
  

  return (
    <Transition show={openPopup}>
      <Dialog className="relative z-10" onClose={setOpenPopup}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                     
                   
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Category Name
                        </label>
                        <div className="mt-2">
                        <input
                        type="text"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 text-gray-700 shadow-sm !important"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        placeholder="Example Category Name"
                      />
                        </div>
                        

                </div>
                <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4">
                     
                   
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Description
                        </label>
                        <div className="mt-2">
                        <textarea
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          value={categoryDesc}
                          onChange={(e) => setCategoryDesc(e.target.value)}
                          placeholder="Example Category Description"
                        />
                 
                        </div>
                        
                </div>
                <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4">
                     <ImageUpload onImageSelect={handleImageSelect} preview={preview} setPreview={setPreview} />
               
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto "
                    onClick={() => console.log("shehab")}
                  >
                    {loading ?  <>Save Now <div className="spinnerwp"></div> </> : 'Save Now' }
                  
                    
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpenPopup(false)}
                    data-autofocus
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
