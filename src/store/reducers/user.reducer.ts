// someReducer.js
import { SAVE_USER_ACTION, LOGOUT_USER_ACTION } from '../actions/user.actions'

const initialState = {
  authenticated: false,
  data: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_ACTION:
      return {
        ...state,
        data: action.payload.user,
        authenticated: true,
      }
    case LOGOUT_USER_ACTION:
      return {
        ...state,
        authenticated: false,
        data: null,
      }
    default:
      return state
  }
}

export default userReducer