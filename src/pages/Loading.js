import React from 'react'

const Loading = () => {
  const [loadingPosition, setLoadingPosition] = React.useState(0)

  React.useEffect(() => {
    const counter = setInterval(() => {
      if (loadingPosition < 100) {
        setLoadingPosition((prevPos) => (prevPos < 100 ? prevPos + 3 : -20))
      } else {
        setLoadingPosition(0)
      }
    }, 100)
    return () => {
      window.clearInterval(counter)
    }
  })
  return (
    <div className='card'>
      <h2 className='loading-h2'>Uploading...</h2>
      <div className='loading-bar'>
        <div style={{ left: `${loadingPosition}%` }}></div>
      </div>
    </div>
  )
}

export default Loading
