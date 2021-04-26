import React from 'react'
import axios from 'axios'

import './App.css'
import PageFooter from './components/PageFooter'
import ImageUpload from './pages/ImageUpload'
import ImageUploadSuccess from './pages/ImageUploadSuccess'
import Loading from './pages/Loading'

let url = 'https://image-uploaderr.herokuapp.com/api/v1/image'
// let urlLocal = 'http://localhost:5000/api/v1/image'

function App(props) {
  const [page, setPage] = React.useState('')
  const [alert, setAlert] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  const [imageUrl, setImageUrl] = React.useState('')

  const setDisplay = (e, errorMessage = '') => {
    if (e === 'loading') {
      setPage('loading')
    } else if (e === 'success') {
      setPage(e)
    } else if (e === 'fail') {
      console.log(errorMessage)
      setPage('')
      setAlert(true)
      setErrorMessage(errorMessage.errorMsg)
      setTimeout(() => {
        setAlert(false)
        setErrorMessage('')
      }, 3000)
    }
  }

  async function uploadImage(image) {
    // Upload avatar
    setDisplay('loading')
    try {
      const formData = new FormData()
      formData.append('image', image)
      const res = await axios.post(url, formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      console.log(res)
      setImageUrl(res.data.imageUrl)
      setDisplay('success')
    } catch (error) {
      setDisplay('fail', error.response.data)
    }
  }

  return (
    <div className='app'>
      <main className='container'>
        {alert ? <div className='errorMsg'>{errorMessage}</div> : null}
        {page === 'loading' ? (
          <Loading />
        ) : page === 'success' ? (
          <ImageUploadSuccess imageUrl={imageUrl} />
        ) : (
          <ImageUpload uploadImage={uploadImage} />
        )}
      </main>
      <PageFooter />
    </div>
  )
}

export default App
