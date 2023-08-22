import React, { useCallback, useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { BRQLogo, user, padlock } from '~assets/images'
import { Input, Button } from '~common'
import { useDispatch, useSelector } from 'react-redux'
import { tryLoginAction } from '~store/actions/screens/login.screen.action'
import { IState } from '~types/state'
import { styles } from './login.styles'

export const LoginScreen = (): JSX.Element => {
  const dispatch = useDispatch()
  const loading = useSelector((state: IState) => state.loginScreen.loading)
  const failMessage = useSelector((state: IState) => state.loginScreen.failMessage)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [loginDisabled, setLoginDisabled] = useState(true)

  const isValidForm = useCallback(() => {
    const hasUsernameAndPassword = username.trim() && password.trim()
    if (!hasUsernameAndPassword) {
      return false
    }
    const isPasswordValid = password.trim().length >= 3 && password.search(/[\D]+/ig) < 0
    if (!isPasswordValid) {
      return false
    }

    return true
  }, [username, password])

  useEffect(() => {
    if (isValidForm()) {
      setLoginDisabled(false)
      return
    }
    setLoginDisabled(true)
  }, [username, password])

  const handleLogin = () => {
    if (loginDisabled) return false

    dispatch(tryLoginAction({
      username, password: parseInt(password)
    }))
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.logoContent}>
            <Image source={BRQLogo} />
          </View>
          <View style={styles.loginContent}>
            <Input
              placeholder="Usuário"
              icon={user}
              showResetIcon
              value={username}
              onAction={setUserName}
            />
            <Input
              placeholder="Senha"
              icon={padlock}
              showResetIcon
              value={password}
              secureTextEntry
              onAction={setPassword}
            />
          </View>
          {!!failMessage && <Text style={styles.failMessage}>{failMessage}</Text>}
          <Button text="Entrar" disabled={loginDisabled} onPress={handleLogin} loading={loading} />
          <Text style={styles.forgetPassword}>Esqueci a senha</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}