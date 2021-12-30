import { useEffect } from "react"

export default function useServiceWorker() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("service worker registration successful", registration)
        })
        .catch((err) => {
          console.warn("service worker registration failed", err.message)
        })
    }
  }, [])
}
