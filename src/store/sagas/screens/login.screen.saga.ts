import { takeLatest, put, call, delay } from 'redux-saga/effects'
import {
  LOGIN_ACTION,
  loginFailAction,
  loginSuccessAction
} from '~actions/screens/login.screen.action'
import { Api } from '~services/api'
import { saveUserAction } from '~actions/user.actions'

const failMessage = "Usuário ou senha inválidos"

function* handleLoginAction(action) {
  const { credentials } = action.payload
  yield delay(1000) // simule api delay

  const userSuccess = yield Api().login(credentials)

  if (userSuccess) {
    yield put(loginSuccessAction())
    yield put(saveUserAction(userSuccess))
    return
  }

  yield put(loginFailAction(failMessage))
}

function* loginScreenSaga() {
  yield takeLatest(LOGIN_ACTION, handleLoginAction)
}

export default loginScreenSaga;