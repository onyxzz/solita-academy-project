import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import {
  Loader,
  StationCard,
  StationFormField,
  Pagination,
} from "../components"

const DEVELOPMENT_URL = "http://localhost:8080/"
const DEPLOYMENT_URL = "https://solita-academy-project.vercel.app/"

const RenderCards = ({ data, title }) => {
  if (data?.length > 0)
    return data.map((station) => <StationCard key={station._id} {...station} />)

  return <h2 className="font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
}

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [allStations, setAllStations] = useState(null)

  const [searchText, setSearchText] = useState("")
  const [searchedResults, setSearchedResults] = useState(null)
  const [searchTimeout, setSearchTimeout] = useState(null)

  const { pageNumber } = useParams()
  const currentPage = pageNumber || 1

  const [page, setPage] = useState(currentPage)
  const [pages, setPages] = useState(1)

  useEffect(() => {
    const fetchStations = async () => {
      setLoading(true)

      try {
        const response = await fetch(
          `${DEVELOPMENT_URL}api/v1/stations?page=${page}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )

        if (response.ok) {
          const { data, pages: totalPages } = await response.json()

          setPages(totalPages)
          setAllStations(data)
          setLoading(false)
        }
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      }
    }

    fetchStations()
  }, [page])

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout)

    setSearchText(e.target.value)

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = allStations.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        )

        setSearchedResults(searchResults)
      }, 500)
    )
  }

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
        <StationFormField
          labelName="Search stations"
          type="text"
          name="text"
          placeholder="Search stations by name"
          value={searchText}
          handleChange={handleSearchChange}
        />
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
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-10">
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No search results found"
                />
              ) : (
                <RenderCards data={allStations} title="No stations found" />
              )}
            </div>
            {!searchText && (
              <div className="flex justify-around">
                <Pagination
                  page={parseInt(page)}
                  pages={pages}
                  changePage={setPage}
                />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Home
