import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const StationPage = () => {
  const { stationName } = useParams()
  const [stationData, setStationData] = useState(null)

  useEffect(() => {
    const fetchSingleStation = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/stations/${stationName}`
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

  if (!stationData) {
    return <div>Station data not found.</div>
  }

  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="font-extrabold text-[#222328] text-[32px]">
        {stationData.name}
      </h1>
      <div className="mt-8 flex justify-between w-full">
        <p className="mt-2 text-[#666e75] text-[16px] max-2-[500px]">
          Station ID: {stationData.stationID}
        </p>
        <p className="mt-2 text-[#666e75] text-[16px] max-2-[500px]">
          City: {stationData.city}
        </p>
        <p className="mt-2 text-[#666e75] text-[16px] max-2-[500px]">
          Capacity: {stationData.capacity}
        </p>
        <p className="mt-2 text-[#666e75] text-[16px] max-2-[500px]">
          Address: {stationData.address}
        </p>
        <p className="mt-2 text-[#666e75] text-[16px] max-2-[500px]">
          Operator: {stationData.operator}
        </p>
      </div>
    </section>
  )
}

export default StationPage
