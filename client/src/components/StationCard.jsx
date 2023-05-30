import React from "react"
import { Link } from "react-router-dom"

const StationCard = ({ name }) => {
  return (
    <Link
      className="rounded-xl group relative shadow-card hover:text-white hover:bg-[#6469ff] p-6"
      to={`/stations/${name}`}
    >
      {name}
    </Link>
  )
}

export default StationCard
