import { useRef } from 'react'

const FileUpload = (props) => {
  const fileInput = useRef()
  const selectFile = (e) => {
    const reader = new FileReader()
    const file = fileInput.current.files[0]
    reader.readAsDataURL(file)
    reader.onloadend = (e) => {
      document.querySelector('#img').src = e.target.result
    }
  }
  return (
    <>
      <input type="file" ref={fileInput} onChange={selectFile} />
      <div>
        <img src="" id="img"></img>
      </div>
      <button>업로드하기</button>
    </>
  )
}

export default FileUpload
