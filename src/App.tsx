import React, { useState } from "react"

import { data } from "../data"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <div>
      <Navbar />
      <Hero />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-6 gap-4">
          {data.slice(0, 3).map((item) => (
            <div className="border-2 shadow rounded border-black-600 p-6" key={item.id}>
              <h1 className="font-bold text-center text-black/60">{item.name}</h1>
              <h2 className="font-semibold text-center text-black/60">{item.jobprofile}</h2>
              <p className="text-medium text-center text-black/60">{item.salary}</p>
              <p className="text-sm text-center text-black/60">{item.description.slice(0, 372)}</p>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  )
}


export default App
