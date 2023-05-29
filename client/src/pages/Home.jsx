import React, { useState, useEffect } from "react"

import { Loader, StationCard, StationFormField } from "../components"

const RenderCards = ({ data, title }) => {
  if (data?.length > 0)
    return data.map((station) => <StationCard key={station._id} {...station} />)

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  )
}

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [allStations, setAllStations] = useState(null)

  const [searchText, setSearchText] = useState("")

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Helsinki City Bike App
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-2-[500px]">
          Browse all Helsinki Region Transport's city bicycle stations
        </p>
      </div>

      <div className="mt-16">
        <StationFormField />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing results for{" "}
                <span className="text-[#222328]">{searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1">
              {searchText ? (
                <RenderCards data={[]} title="No search results found" />
              ) : (
                <RenderCards data={[]} title="No stations found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Home
