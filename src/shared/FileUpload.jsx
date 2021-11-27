import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { postActions } from '../redux/modules/post'

const FileUpload = (props) => {
  const dispatch = useDispatch()
  const fileInput = useRef()
  const selectFile = (e) => {
    const reader = new FileReader()
    const file = fileInput.current.files[0]
    reader.readAsDataURL(file)
    reader.onloadend = (e) => {
      document.querySelector('#img').src = e.target.result
    }
    dispatch(postActions.addPostAWS(file))
  }

  return (
    <>
      <input type="file" ref={fileInput} onChange={selectFile} />
      <div>
        <img src="" id="img"></img>
      </div>
    </>
  )
}

export default FileUpload
