import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Service from '../components/Service'

const Services = () => {
    return (
        <>
            <Navbar />
            <div>
                <div className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
                    style=
                    {{ backgroundImage: `url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)` }}

                >
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75" />
                    <main className="px-4 sm:px-6 lg:px-8 z-10">
                        <div className="text-center">
                            <h2 className="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
                                <span className="font-bold">Our Providing Services </span>
                            </h2>
                            <p className="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                                Absolute Information is one of the best software company where we built ERP softwares, websits mobile apps.
                            </p>
                        </div>
                    </main>
                </div>
            </div >
            <section>
                <Service />
            </section>
            <Footer />
        </>
    )
}

export default Services