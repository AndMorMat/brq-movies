const PREFIX = 'user'
export const SAVE_USER_ACTION = `${PREFIX}.SAVE_USER_ACTION`
export const LOGOUT_USER_ACTION = `${PREFIX}.LOGOUT_USER_ACTION`

export const saveUserAction = (user) => ({
  type: SAVE_USER_ACTION,
  payload: { user },
})

export const logOutUserAction = () => ({
  type: LOGOUT_USER_ACTION,
})
