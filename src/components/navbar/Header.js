import React from 'react'

// Functional component for the header
function Header() {
  return (
    <div className='text-xl bg-white px-2 py-4 shadow-xl max-md:py-1 max-md:text-center fixed w-full' data-testid='header'>
        <h2 className="text-3xl font-serif font-semibold w-full max-md:text-xl xl:px-20 lg:px-20">Flash card Generation</h2>
    </div>
  )
}

// Export the Header component as the default export
export default Header
