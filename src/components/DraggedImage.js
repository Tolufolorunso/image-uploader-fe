import React from 'react'
import logo from '../assets/images/image.svg'

const DraggedImage = ({ uploadImage }) => {
  function handleDrag(e) {
    e.preventDefault()
  }

  function handleOnDrag(e) {
    e.preventDefault()
    const imageFile = e.dataTransfer.files
    uploadImage(imageFile['0'])
  }

  return (
    <div
      className='dropZone'
      onDrop={handleOnDrag}
      onDragOver={handleDrag}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
    >
      <div className='image'>
        <img src={logo} alt='' width='150' />
      </div>
      <p>Drag &amp; Drop your image here</p>
    </div>
  )
}

export default DraggedImage
