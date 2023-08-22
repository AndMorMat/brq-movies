import dataMock from './data-mock.json'

interface ICredentialsProps {
  username: string,
  password: number
}

export function Api() {
  const login = async (credentials: ICredentialsProps) => {
    return await Promise.resolve(dataMock).then((users) => {
      const simulatedUser = users.find(user => (
        credentials.username === user.username && credentials.password === user.password
      ))

      if (simulatedUser) return simulatedUser

      return false
    })
  }

  return {
    login
  }
}