import React from 'react'

const Button = (props) => {
    const clickHandler = (e) => {
        e.preventDefault();
        alert("Clicked");
    }
    return (
        <div>
            <button onClick={clickHandler} className='className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10'>{props.title}</button>
        </div>
    )
}

export default Button