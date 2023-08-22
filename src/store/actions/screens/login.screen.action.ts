const PREFIX = 'login'
export const LOGIN_ACTION = `${PREFIX}.LOGIN_ACTION`
export const LOGIN_SUCCESS_ACTION = `${PREFIX}.LOGIN_SUCCESS_ACTION`
export const LOGIN_FAIL_ACTION = `${PREFIX}.LOGIN_FAIL_ACTION`

interface ICredentials {
  username: string,
  password: number
}

export const tryLoginAction = (credentials: ICredentials) => ({
  type: LOGIN_ACTION,
  payload: { credentials },
})

export const loginSuccessAction = () => ({
  type: LOGIN_SUCCESS_ACTION,
})

export const loginFailAction = (failMessage) => ({
  type: LOGIN_FAIL_ACTION,
  payload: { failMessage }
})