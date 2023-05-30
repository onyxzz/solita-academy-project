import React from "react"

const Pagination = ({ page, pages, changePage }) => {
  let middlePagination

  if (pages <= 5) {
    middlePagination = [...Array(pages)].map((_, index) => {
      const pageNumber = index + 1
      return (
        <button
          key={pageNumber}
          onClick={() => changePage(pageNumber)}
          disabled={page === pageNumber}
          className={`${
            page === pageNumber ? "bg-[#6469ff] text-white" : "bg-gray-300"
          } py-2 px-4 rounded`}
        >
          {pageNumber}
        </button>
      )
    })
  } else {
    const startValue = Math.floor((page - 1) / 5) * 5

    middlePagination = (
      <>
        {[...Array(5)].map((_, index) => {
          const pageNumber = startValue + index + 1
          return (
            <button
              key={pageNumber}
              disabled={page === pageNumber}
              onClick={() => changePage(pageNumber)}
              className={`${
                page === pageNumber ? "bg-[#6469ff] text-white" : "bg-gray-300"
              } py-2 px-4 rounded`}
            >
              {pageNumber}
            </button>
          )
        })}

        <button className="bg-gray-300 py-2 px-4 rounded">...</button>
        <button
          onClick={() => changePage(pages)}
          className={`${
            page === pages ? "bg-[#6469ff] text-white" : "bg-gray-300"
          } py-2 px-4 rounded`}
        >
          {pages}
        </button>
      </>
    )

    if (page > 5) {
      if (pages - page >= 5) {
        middlePagination = (
          <>
            <button
              onClick={() => changePage(1)}
              className={`${
                page === 1 ? "bg-[#6469ff] text-white" : "bg-gray-300"
              } py-2 px-4 rounded`}
            >
              1
            </button>
            <button className="bg-gray-300 py-2 px-4 rounded">...</button>
            <button
              onClick={() => changePage(startValue)}
              className={`${
                page === startValue ? "bg-[#6469ff] text-white" : "bg-gray-300"
              } py-2 px-4 rounded`}
            >
              {startValue}
            </button>
            {[...Array(5)].map((_, index) => {
              const pageNumber = startValue + index + 1
              return (
                <button
                  key={pageNumber}
                  disabled={page === pageNumber}
                  onClick={() => changePage(pageNumber)}
                  className={`${
                    page === pageNumber
                      ? "bg-[#6469ff] text-white"
                      : "bg-gray-300"
                  } py-2 px-4 rounded`}
                >
                  {pageNumber}
                </button>
              )
            })}

            <button className="bg-gray-300 py-2 px-4 rounded">...</button>
            <button
              onClick={() => changePage(pages)}
              className={`${
                page === pages ? "bg-[#6469ff] text-white" : "bg-gray-300"
              } py-2 px-4 rounded`}
            >
              {pages}
            </button>
          </>
        )
      } else {
        let amountLeft = pages - page + 5
        middlePagination = (
          <>
            <button
              onClick={() => changePage(1)}
              className={`${
                page === 1 ? "bg-[#6469ff] text-white" : "bg-gray-300"
              } py-2 px-4 rounded`}
            >
              1
            </button>
            <button className="bg-gray-300 py-2 px-4 rounded">...</button>
            <button
              onClick={() => changePage(startValue)}
              className={`${
                page === startValue ? "bg-[#6469ff] text-white" : "bg-gray-300"
              } py-2 px-4 rounded`}
            >
              {startValue}
            </button>
            {[...Array(amountLeft)].map((_, index) => {
              const pageNumber = startValue + index + 1
              return (
                <button
                  key={pageNumber}
                  style={pages < pageNumber ? { display: "none" } : null}
                  disabled={page === pageNumber}
                  onClick={() => changePage(pageNumber)}
                  className={`${
                    page === pageNumber
                      ? "bg-[#6469ff] text-white"
                      : "bg-gray-300"
                  } py-2 px-4 rounded`}
                >
                  {pageNumber}
                </button>
              )
            })}
          </>
        )
      }
    }
  }

  return (
    pages > 1 && (
      <div className="mt-16 w-1/2 flex justify-around">
        <button
          onClick={() => changePage((prevPage) => prevPage - 1)}
          disabled={page === 1}
          className={`${
            page === 1
              ? "bg-gray-300 cursor-default"
              : "bg-gray-300 hover:bg-gray-400"
          } py-2 px-4 rounded`}
        >
          &#171;
        </button>
        {middlePagination}
        <button
          onClick={() => changePage((nextPage) => nextPage + 1)}
          disabled={page === pages}
          className={`${
            page === pages
              ? "bg-gray-300 cursor-default"
              : "bg-gray-300 hover:bg-gray-400"
          } py-2 px-4 rounded`}
        >
          &#187;
        </button>
      </div>
    )
  )
}

export default Pagination
