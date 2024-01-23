// Import necessary React components and hooks
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

// Import icons from react-icons for UI elements
import { FaCopy, FaInstagramSquare, FaShare, FaTwitter, FaWhatsappSquare } from 'react-icons/fa';
import { FaRegCopy, FaSquareFacebook } from "react-icons/fa6";
import { MdLocalPostOffice } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";


// Share component for displaying sharing options
const Share = ({ isvisible, onClose }) => {
    // Function to close the Share modal
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') return onClose();
    }

    const [isCopied, setIsCopied] = useState(false);        // State to track whether link is copied
    const location = useLocation();                         // Get the current location using useLocation hook

    // Function to copy the link to the clipboard
    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(`http://localhost:3000${location.pathname}`);
        setIsCopied(true);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };
      
    // Return null if the modal is not visible
    if (!isvisible) return null

    // JSX for the Share component
    return (
        <div 
            className='fixed inster-0 bg-black bg-opacity-25 backdrop-blur-sm h-full w-full -mt-48'
            id='wrapper'
            onClick={(e)=>handleClose(e)}
        >
            <div className='w-[70%] border-2 m-52 max-lg:m-28 max-md:m-32 max-sm:m-2 max-sm:w-[96%] rounded-md'>

                {/* Close button with RxCross2 icon*/}
                <button 
                    className='text-black text-xl float-end mr-5 mt-3'
                    onClick={()=> onClose()}
                ><RxCross2 className='font-bold size-6 hover:text-red-600 hover:size-8 hover:-mt-1 hover:-mr-1 hover:font-extrabold'/></button>

                {/* Share header */}
                <div className='bg-white p-5 font-bold'>Share</div>
                <hr className='h-1'/>

                {/* Link sharing section */}
                <div className='flex flex-row bg-white p-5'>

                    {/* Input for displaying link */}
                    <div className='flex w-4/5 border-2 h-12 items-center pl-5'>
                        <div className='font-light'>Link</div>
                        <div className='ml-5 truncate w-full'>
                            <input 
                                type='text' 
                                className='w-full h-11'
                                value={`http://localhost:3000${location.pathname}`} 
                                readOnly
                            />
                        </div>
                    </div>

                    {/* Copy button with FaCopy icon */}
                    <div className='flex w-[10%] h-12 items-center justify-center'>
                        {isCopied === false ? (<FaRegCopy className='size-6 hover:size-7 cursor-pointer'
                            onClick={() => copyToClipboard()}
                        />) : (<FaCopy className='size-6 hover:size-7 cursor-pointer'/>) }
                    
                    </div>

                    {/* Share button with FaShare icon */}
                    <div className='flex w-[10%] h-12 items-center justify-center'>
                        <FaShare className='size-6 hover:size-8 cursor-pointer'/>
                    </div>
                </div>
                
                {/* Copied confirmation or empty space */}
                {isCopied === true ? 
                    (<div className='text-red-600 bg-white -mt-6 ml-6'>Copied to Clipboard</div>) : 
                    (<div className='text-red-600 bg-white '></div>) 
                }
                
                {/* Social media sharing section with the icons */}
                <div className='flex flex-row bg-white p-5'>
                    <div className='flex w-1/5 h-12 items-center justify-center'>
                        <FaSquareFacebook className='size-6 hover:size-8 cursor-pointer'/>
                    </div>
                    <div className='flex w-1/5 h-12 items-center justify-center'>
                        <FaInstagramSquare className='size-6 hover:size-8 cursor-pointer' />
                    </div>
                    <div className='flex w-1/5 h-12 items-center justify-center'>
                        <FaWhatsappSquare className='size-6 hover:size-8 cursor-pointer'/>
                    </div>
                    <div className='flex w-1/5 h-12 items-center justify-center'>
                        <FaTwitter className='size-6 hover:size-8 cursor-pointer'/>
                    </div>
                    <div className='flex w-1/5 h-12 items-center justify-center'>
                        <MdLocalPostOffice className='size-6 hover:size-8 cursor-pointer'/>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

// Export the Share component as the default export
export default Share
