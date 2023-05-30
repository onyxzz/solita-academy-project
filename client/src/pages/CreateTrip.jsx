import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { StationFormField } from "../components"

const CreateStation = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    departureDate: "",
    returnDate: "",
    departureStationId: "",
    departureStationName: "",
    returnStationId: "",
    returnStationName: "",
    distance: "",
    duration: "",
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      form.departureDate &&
      form.returnDate &&
      form.departureStationId &&
      form.departureStationName &&
      form.returnStationId &&
      form.returnStationName &&
      form.distance &&
      form.duration
    ) {
      setLoading(true)

      try {
        const response = await fetch(
          "https://solita-academy-project.vercel.app//api/v1/trips/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        )

        await response.json()
        navigate("/")
      } catch (err) {
        alert(err)
      } finally {
        setLoading(false)
      }
    } else {
      alert("Please fill out all the fields!")
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-2-[500px]">
          Create a trip using Helsinki Region Transport's city bicycle
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <StationFormField
            labelName="Departure Date"
            type="date"
            name="departureDate"
            placeholder="Departure Date"
            value={form.departureDate}
            handleChange={handleChange}
          />
          <StationFormField
            labelName="Return Date"
            type="date"
            name="returnDate"
            placeholder="Return Date"
            value={form.returnDate}
            handleChange={handleChange}
          />
          <StationFormField
            labelName="Departure Station Id"
            type="number"
            name="departureStationId"
            placeholder="Departure Station Id"
            value={form.departureStationId}
            handleChange={handleChange}
          />
          <StationFormField
            labelName="Departure Station Name"
            type="text"
            name="departureStationName"
            placeholder="Departure Station Name"
            value={form.departureStationName}
            handleChange={handleChange}
          />
          <StationFormField
            labelName="Return Station Id"
            type="number"
            name="returnStationId"
            placeholder="Return Station Id"
            value={form.returnStationId}
            handleChange={handleChange}
          />
          <StationFormField
            labelName="Distance"
            type="number"
            name="distance"
            placeholder="Distance"
            value={form.distance}
            handleChange={handleChange}
          />
          <StationFormField
            labelName="Duration"
            type="number"
            name="duration"
            placeholder="Duration"
            value={form.duration}
            handleChange={handleChange}
          />

          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Create
          </button>
        </div>
      </form>
    </section>
  )
}

export default CreateStation
