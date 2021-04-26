import React from 'react'

const InputFile = ({ handleImageUpload }) => {
  return (
    <>
      <span className='or'>or</span>
      <div className='file-input'>
        <input type='file' accept='image/*' onChange={handleImageUpload} />
        <button className='btn'>Choose a file</button>
      </div>
    </>
  )
}

export default InputFile
