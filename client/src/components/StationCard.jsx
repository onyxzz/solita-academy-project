import React from "react"

const StationCard = ({
  _id,
  stationID,
  name,
  address,
  city,
  operator,
  capacity,
  xCordinate,
  yCordinate,
}) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:text-white hover:bg-[#6469ff] p-6">
      <div>{name}</div>
    </div>
  )
}

export default StationCard
