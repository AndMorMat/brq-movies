// someReducer.js
import { LOGIN_ACTION } from '~store/actions/screens/login.screen.action'
import { LOGIN_FAIL_ACTION } from '~actions/screens/login.screen.action'
import { LOGIN_SUCCESS_ACTION } from '~actions/screens/login.screen.action'

const initialState = {
  loading: false,
  failMessage: ""
}

const loginScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        ...state,
        loading: true,
        failMessage: ""
      }
    case LOGIN_SUCCESS_ACTION: {
      return {
        ...state,
        loading: false,
        failMessage: ""
      }
    }
    case LOGIN_FAIL_ACTION:
      return {
        ...state,
        loading: false,
        failMessage: action.payload.failMessage
      }
    default:
      return state
  }
}

export default loginScreenReducer