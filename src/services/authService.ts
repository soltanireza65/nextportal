import OIDC, { Log, User, UserManager, UserManagerSettings } from "oidc-client"
import { Constants } from "./auth"
import { setWithExpiry } from "utils/localStorageHelper"

let userManager: UserManager

export class AuthService {
  constructor() {
    if (!userManager) {
      const settings: UserManagerSettings = {
        authority: Constants.stsAuthority,
        client_id: Constants.clientId,
        redirect_uri: `${Constants.clientRoot}auth/login`,
        silent_redirect_uri: `${Constants.clientRoot}auth/login`,
        // tslint:disable-next-line:object-literal-sort-keys
        post_logout_redirect_uri: `${Constants.clientRoot}auth/logout`,
        response_mode: "query",
        response_type: "code",
        scope: Constants.clientScope,
        loadUserInfo: true,

        automaticSilentRenew: false,
        validateSubOnSilentRenew: true,

        filterProtocolClaims: true,
        revokeAccessTokenOnSignout: true,
        userStore: new OIDC.WebStorageStateStore({
          store: window.localStorage,
        }),
      }
      userManager = new UserManager(settings)

      Log.logger = console
      Log.level = Log.ERROR
      Log.level = Log.INFO
      Log.level = Log.WARN
    }
  }

  public getUser(): Promise<User | null> {
    return userManager.getUser()
  }

  navigateToScreen = () => {
    window.location.replace("/")
  }
  public getToken = async (): Promise<string> => {
    try {
      const user = await userManager.getUser()

      let access_token, expired

      if (user) {
        access_token = user.access_token
        expired = user.expired
      }

      if (access_token && !expired) {
        return access_token
      } else if (expired) {
        const { access_token } = await this.renewToken()
        return access_token
      } else {
        return null
      }
    } catch {
      return null
    }
  }
  public login(): Promise<void> {
    userManager
      .signinRedirect({
        state: "some data",
        data: {
          path: window.location.pathname,
        },
      })
      .then((x) => {})
    return
  }
  public async signinSilentCallback(): Promise<User | undefined> {
    const user = await userManager.signinRedirectCallback()
    if (user && user.access_token) {
      setWithExpiry("access_token", user.access_token, 86400000)
    }
    return user
  }
  public async signinCallback(): Promise<User | undefined> {
    const user = await userManager.signinCallback()
    if (user && user.access_token) {
      setWithExpiry("access_token", user.access_token, 86400000)
    }
    return user
  }
  public signInSilent(): Promise<User | undefined> {
    return userManager.signinSilent()
  }

  public async renewToken(): Promise<User> {
    return userManager
      .signinSilent()
      .then((x) => {
        if (x && x.access_token) {
          setWithExpiry("access_token", x.access_token, 86400000)
        }
        return x
      })
      .catch((e) => {
        return null
      })
  }

  public async logout(): Promise<void> {
    window.location.href = "https://idp.behsoud.com/Account/Logout"
    localStorage.removeItem("access_token")
    await userManager.revokeAccessToken()
    return
  }
}
