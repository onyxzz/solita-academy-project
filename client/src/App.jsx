import React from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

import { logo } from "./assets"
import { Home, CreateStation, Station, CreateTrip } from "./pages"

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <div>
          <Link
            to="/create-trip"
            className="font-inter mr-3 font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          >
            Create Trip
          </Link>
          <Link
            to="/create-station"
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          >
            Create Station
          </Link>
        </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/page/:pageNumber" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/create-station" element={<CreateStation />} />
          <Route path="/stations" element={<Station />} />
          <Route path="create-trip" element={<CreateTrip />} />
          <Route path="/stations/:stationName" element={<Station />} />
          <Route
            path="/stations/:stationName/:pageNumber"
            element={<Station />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
