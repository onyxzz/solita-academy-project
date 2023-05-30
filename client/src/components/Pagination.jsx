import React from "react"

const Pagination = ({ page, pages, changePage }) => {
  let middlePagination

  if (pages <= 5) {
    middlePagination = [...Array(pages)].map((_, index) => {
      return (
        <button
          key={index + 1}
          onClick={() => changePage(index + 1)}
          disabled={page === index + 1}
        >
          {index + 1}
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
            >
              {pageNumber}
            </button>
          )
        })}

        <button>...</button>
        <button onClick={() => changePage(pages)}>{pages}</button>
      </>
    )

    if (page > 5) {
      if (pages - page >= 5) {
        middlePagination = (
          <>
            <button onClick={() => changePage(1)}>1</button>
            <button>...</button>
            <button onClick={() => changePage(startValue)}>{startValue}</button>
            {[...Array(5)].map((_, index) => {
              const pageNumber = startValue + index + 1
              return (
                <button
                  key={pageNumber}
                  disabled={page === pageNumber}
                  onClick={() => changePage(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            })}

            <button>...</button>
            <button onClick={() => changePage(pages)}>{pages}</button>
          </>
        )
      } else {
        let amountLeft = pages - page + 5
        middlePagination = (
          <>
            <button onClick={() => changePage(1)}>1</button>
            <button>...</button>
            <button onClick={() => changePage(startValue)}>{startValue}</button>
            {[...Array(amountLeft)].map((_, index) => {
              const pageNumber = startValue + index + 1
              return (
                <button
                  key={pageNumber}
                  style={pages < pageNumber ? { display: "none" } : null}
                  disabled={page === pageNumber}
                  onClick={() => changePage(pageNumber)}
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
        >
          &#171;
        </button>
        {middlePagination}
        <button
          onClick={() => changePage((nextPage) => nextPage + 1)}
          disabled={page === pages}
        >
          &#187;
        </button>
      </div>
    )
  )
}

export default Pagination
