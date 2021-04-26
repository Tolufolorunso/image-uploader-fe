import React, { useState } from 'react'

const ImageUploadSuccess = ({ imageUrl }) => {
  const [copy, setCopy] = useState('')
  imageUrl = `https:${imageUrl}`
  const copyUrl = (e) => {
    e.preventDefault()
    const input = document.querySelector("input[type='text']")
    input.select()
    document.execCommand('copy')
    setCopy('Image url copied')
    setTimeout(() => setCopy(''), 3000)
  }
  return (
    <div className='card'>
      <h2>Uploaded Successfully!</h2>
      <div className='image-container'>
        <img src={imageUrl} alt='' />
      </div>
      <form onSubmit={copyUrl} className='copy-url'>
        <input type='text' value={imageUrl} readOnly />
        <button>Copy Link</button>
      </form>
      {!!copy ? <p className='copy'>{copy}</p> : null}
    </div>
  )
}

export default ImageUploadSuccess
