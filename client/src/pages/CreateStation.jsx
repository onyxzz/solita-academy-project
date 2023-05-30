import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { StationFormField } from "../components"

const CreateStation = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    stationID: "",
    name: "",
    address: "",
    city: "",
    operator: "",
    capacity: "",
    xCordinate: "",
    yCordinate: "",
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      form.stationID &&
      form.name &&
      form.address &&
      form.city &&
      form.operator &&
      form.capacity &&
      form.xCordinate &&
      form.yCordinate
    ) {
      setLoading(true)

      try {
        const response = await fetch(
          "https://solita-academy-project.vercel.app/api/v1/stations/",
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
          Create a Helsinki Region Transport's city bicycle stations
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <StationFormField
            labelName="Station ID"
            type="number"
            name="stationID"
            placeholder="Station ID"
            value={form.stationID}
            handleChange={handleChange}
          />
          <StationFormField
            labelName="Station Name"
            type="text"
            name="name"
            placeholder="Station Name"
            value={form.name}
            handleChange={handleChange}
          />
          <StationFormField
            labelName="Address"
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            handleChange={handleChange}
          />
          <StationFormField
            labelName="Operator"
            type="text"
            name="operator"
            placeholder="Operator"
            value={form.operator}
            handleChange={handleChange}
          />
          <StationFormField
            labelName="Capacity"
            type="number"
            name="capacity"
            placeholder="Capacity"
            value={form.capacity}
            handleChange={handleChange}
          />
          <StationFormField
            labelName="X Cordinate"
            type="number"
            name="xCordinate"
            placeholder="X Cordinate"
            value={form.xCordinate}
            handleChange={handleChange}
          />
          <StationFormField
            labelName="Y Cordinate"
            type="number"
            name="yCordinate"
            placeholder="Y Cordinate"
            value={form.yCordinate}
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
