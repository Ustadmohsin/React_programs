import React from 'react'

function Card() {
  return (
    
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
  )
}

export default Card