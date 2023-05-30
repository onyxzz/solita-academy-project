import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Pagination, TripCard } from "../components"

const RenderCards = ({ data, title }) => {
  if (data?.length > 0)
    return data.map((trip) => <TripCard key={trip._id} {...trip} />)

  return <h2 className="font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
}

const StationPage = () => {
  const { stationName } = useParams()
  const [stationData, setStationData] = useState(null)
  const [allTrips, setAllTrips] = useState(null)

  const { pageNumber } = useParams()
  const currentPage = pageNumber || 1

  const [page, setPage] = useState(currentPage)
  const [pages, setPages] = useState(1)

  const [totalDepart, setTotalDepart] = useState(0)
  const [totalReturn, setTotalReturn] = useState(0)

  useEffect(() => {
    const fetchSingleStation = async () => {
      try {
        const response = await fetch(
          `https://solita-academy-project.vercel.app//api/v1/stations/${stationName}`
        )
        const data = await response.json()

        if (response.ok) {
          setStationData(data.data)
        } else {
          throw new Error(data.message)
        }
      } catch (error) {
        console.error("Error fetching station:", error)
      }
    }

    fetchSingleStation()
  }, [stationName])

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch(
          `https://solita-academy-project.vercel.app//api/v1/trips?page=${page}&stationName=${stationName}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )

        if (response.ok) {
          const {
            data,
            pages: totalPages,
            totalDepart: totalDepart,
            totalReturn: totalReturn,
          } = await response.json()

          setTotalDepart(totalDepart)
          setTotalReturn(totalReturn)
          setPages(totalPages)
          setAllTrips(data)
        }
      } catch (error) {
        alert(error)
      }
    }

    fetchTrips()
  }, [page, stationName])

  if (stationData === null) {
    return <div>Loading...</div>
  }

  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="font-extrabold text-[#222328] text-[32px]">
        {stationData.name}
      </h1>

      <div className="mt-8 grid grid-cols-3">
        <p className="mt-2 text-[#666e75] text-[16px] max-2-[500px]">
          Station ID: {stationData.stationID}
        </p>
        <p className="mt-2 text-[#666e75] text-[16px] max-2-[500px]">
          Total Departure: {totalDepart}
        </p>
        <p className="mt-2 text-[#666e75] text-[16px] max-2-[500px]">
          Total Return: {totalReturn}
        </p>
        <p className="mt-2 text-[#666e75] text-[16px] max-2-[500px]">
          Address: {stationData.address}
        </p>
        <p className="mt-2 text-[#666e75] text-[16px] max-2-[500px]">
          Operator: {stationData.operator}
        </p>
        <p className="mt-2 text-[#666e75] text-[16px] max-2-[500px]">
          City: {stationData.city}
        </p>
        <p className="mt-2 text-[#666e75] text-[16px] max-2-[500px]">
          Capacity: {stationData.capacity}
        </p>
      </div>

      <div className="mt-10 grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 grid-cols-1 gap-10">
        <RenderCards data={allTrips} title="No trips found" />
      </div>

      <div className="flex justify-around">
        <Pagination page={parseInt(page)} pages={pages} changePage={setPage} />
      </div>
    </section>
  )
}

export default StationPage
