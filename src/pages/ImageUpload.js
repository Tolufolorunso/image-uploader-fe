import React from 'react'

import './Image_style.css'
import InputFile from '../components/InputFile'
import DraggedImage from '../components/DraggedImage'
import { Header } from '../components/Header'

const ImageUpload = ({ uploadImage }) => {
  function handleImageUpload(evt) {
    uploadImage(evt.target.files[0])
  }

  return (
    <div className='card'>
      <Header />
      <DraggedImage uploadImage={uploadImage} />
      <InputFile handleImageUpload={handleImageUpload} />
    </div>
  )
}

export default ImageUpload
