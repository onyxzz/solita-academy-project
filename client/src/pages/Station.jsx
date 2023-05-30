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
    <section>
      <h1>{stationData.name}</h1>
      <p>Station ID: {stationData.stationID}</p>
      <p>Address: {stationData.address}</p>
      <p>City: {stationData.city}</p>
      <p>Operator: {stationData.operator}</p>
      <p>Capacity: {stationData.capacity}</p>
    </section>
  )
}

export default StationPage
