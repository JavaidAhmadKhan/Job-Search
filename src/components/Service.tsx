import React, { useState } from 'react'
import { data } from "../../services-data"

const Service = () => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 3000);
    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-6 gap-4">
                    {data.map((item) => (
                        <div className="border-2 shadow rounded-md border-black-600 py-12 px-8  bg-[#1e1e1e]" key={item.id}>
                            <h1 className="font-semibold text-[24px] text-white">{item.services1}</h1>
                            <p className="font-normal text-[14px] leading-[30px]  text-[#e4e4e4] mb-3">{item.description}</p>
                            <ul>
                                <li className="font-semibold text-[15px] leading-[30px]  text-white ">{item.services2}</li>
                                <li className="font-semibold text-[15px] leading-[30px]  text-white ">{item.services3}</li>

                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Service