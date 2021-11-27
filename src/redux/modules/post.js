import { createAction, handleActions } from 'redux-actions'

import AWS from 'aws-sdk'
import produce from 'immer'
import { v1 } from 'uuid'

const SET_POST = 'SET_POST'

const initialState = {
  list: [
    {
      file_name: 'e267bb704f5b-11ec-8e8e-43f67aef1346.png',
      user_name: '123',
    },
  ],
}

const setPost = createAction(SET_POST, (post) => ({ post }))

const addPostAWS = (file) => {
  return function (dispatch, getState, { history }) {
    const s3 = new AWS.S3({
      accessKeyId: process.env.REACT_APP_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
      region: process.env.REACT_APP_REGION,
    })

    const uploadParams = {
      Bucket: process.env.REACT_APP_AWS_BUCKET,
      Body: file,
      Key: `image/${v1().toString().replace('-', '')}.${
        file.type.split('/')[1]
      }`,
      ContentType: file.type,
      ACL: 'public-read',
    }

    s3.putObject(uploadParams, (err, data) => {
      alert('완료!')
      const fileName = uploadParams.Key.split('/')[1]
      const userName = 'hi!'
      dispatch(setPost({ file_name: fileName, user_name: userName }))
    })
  }
}

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.post)
      }),
  },
  initialState
)

const postActions = {
  setPost,
  addPostAWS,
}

export { postActions }
