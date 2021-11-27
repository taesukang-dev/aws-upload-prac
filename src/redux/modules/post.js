import produce from 'immer'
import { createAction, handleActions } from 'redux-actions'

const SET_POST = 'SET_POST'

const initialState = {
  list: [],
}

const setPost = createAction(SET_POST, (post) => ({ post }))

export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
)

const postActions = {
  setPost,
}

export { postActions }
