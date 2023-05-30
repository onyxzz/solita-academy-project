import React from "react"
import { useNavigate } from "react-router-dom"

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
    <button
      className="rounded-xl group relative shadow-card hover:text-white hover:bg-[#6469ff] p-6"
      onClick={() => {}}
    >
      <div>{name}</div>
    </button>
  )
}

export default StationCard
