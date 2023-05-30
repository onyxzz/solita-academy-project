import React from "react"

const TripCard = ({
  departureDate,
  returnDate,
  departureStationId,
  departureStationName,
  returnStationId,
  returnStationName,
  distance,
  duration,
}) => {
  const formattedDepartureDate = new Date(departureDate).toLocaleString()
  const formattedReturnDate = new Date(returnDate).toLocaleString()
  return (
    <div className="rounded-xl group relative shadow-card p-6">
      <p>
        <span className="font-bold">Departure: </span>
        {formattedDepartureDate}
      </p>
      <p>
        <span className="font-bold">Return: </span>
        {formattedReturnDate}
      </p>
      <p>
        <span className="font-bold">Departure Station Id: </span>
        {departureStationId}
      </p>
      <p>
        <span className="font-bold">Departure Station Name: </span>
        {departureStationName}
      </p>
      <p>
        <span className="font-bold">Return Station Id: </span>
        {returnStationId}
      </p>
      <p>
        <span className="font-bold">Return Station Name: </span>
        {returnStationName}
      </p>
      <p>
        <span className="font-bold">Distance: </span>
        {distance} m
      </p>
      <p>
        <span className="font-bold">Duration: </span>
        {duration} sec
      </p>
    </div>
  )
}

export default TripCard
