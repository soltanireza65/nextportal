import { Http } from "services/Http/withOutServiceResult"

const prefixUrl = `${process.env.NEXT_PUBLIC_APP_URL}/captcha/api/Captcha`
export const CaptchaApi = {
  getCaptcha: async (): Promise<CaptchaInterfaces.ICaptcha> => {
    let response: CaptchaInterfaces.ICaptcha

    response = await Http.request("get", `${prefixUrl}/GetCaptcha`)

    return response
  },
}
