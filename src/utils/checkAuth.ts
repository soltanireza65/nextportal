// import { AuthService } from "services/authService"
import { validateToken } from "./localStorageHelper"

export const checkAuth = async (): Promise<boolean> => {
  const { isExpired, token } = validateToken("access_token")

  if (!token) {
    return false
  }
  if (!isExpired) {
    if (token) {
      {
        return true
      }
    } else {
      return false
    }
  } else {
    return false
  }
}
