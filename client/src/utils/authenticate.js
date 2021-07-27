import getItemWithExpiry from './useLocalStorage'

export default function authenticate() {
  const accessToken = getItemWithExpiry("access-token")
  const now = new Date()
  
  const isAuthenticated = accessToken.expiry < now.getTime()
  return isAuthenticated
}
