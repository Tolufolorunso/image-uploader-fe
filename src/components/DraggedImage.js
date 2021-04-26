import React from 'react'
import logo from '../assets/images/image.svg'

const DraggedImage = ({ uploadImage }) => {
  const [borderColor, setBorderColor] = React.useState('#2f80ed')
  function handleOnDragOver(e) {
    e.preventDefault()
    setBorderColor('green')
  }

  function handleDragEnter(e) {
    e.preventDefault()
    setBorderColor('green')
  }
  function handleDragLeave(e) {
    e.preventDefault()
    setBorderColor('#2f80ed')
  }

  function handleOnDrop(e) {
    e.preventDefault()
    setBorderColor('#2f80ed')
    const imageFile = e.dataTransfer.files
    uploadImage(imageFile['0'])
  }

  return (
    <div
      className='dropZone'
      style={{ border: `2px dashed ${borderColor}` }}
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <div className='image'>
        <img src={logo} alt='logo' width='150' />
      </div>
      <p>Drag &amp; Drop your image here</p>
    </div>
  )
}

export default DraggedImage
