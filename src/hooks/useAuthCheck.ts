import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AuthService } from "services/authService";
import { checkAuth } from "utils/checkAuth";

// TODO - change all this scenario to pages
export default function useAuthCheck() {
  const router = useRouter();
  const [isAuthenticted, setIsAuthenticted] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const auth = new AuthService();
      let isAuth: boolean = false;
      isAuth = await checkAuth();

      setIsAuthenticted(isAuth);

      if (isAuth) {
        if (router.query.slug) {
          if (router.query.slug[0].toLowerCase() == "signin" || "login") {
            let returnUrl = localStorage.getItem("authReturnUrl");
            if (returnUrl) {
              router.push(returnUrl);
            } else router.push("/");
          }
          if (router.query.slug[0].toLowerCase() == "logout") {
            localStorage.removeItem("access_token");
            await auth.logout();
            const returnUrl = localStorage.getItem("authReturnUrl");
            if (returnUrl) {
              router.push(returnUrl);
            } else router.push("/");
          }
        }
      } else {
        if (router.query && router.query.slug && router.query.slug[0].toLowerCase() == "logout") {
          router.push("/");
        }
        if (router.query && router.query.slug) {
          if (router.query.slug[0].toLowerCase() == "signin") {
            await auth.login();
          }
          if (router.query.slug[0].toLowerCase() == "login") {
            try {
              await auth.signinSilentCallback();
              const returnUrl = localStorage.getItem("authReturnUrl");
              if (!returnUrl) {
                router.push("/");
              } else {
                router.push(returnUrl);
              }
            } catch (e) {
              localStorage.removeItem("access_token");
            }
          }
        }
      }
    })();
  }, []);
  return {
    isAuthenticted,
  };
}
