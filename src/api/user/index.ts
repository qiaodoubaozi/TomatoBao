import request from "@/utils/request"
import { loginForm, loginResult, userInfoResult} from "./type"

enum API {
  LOGIN_URL = "/user/login",
  USER_INFO_URL = "/user/info",
}

export const login = (data: loginForm): Promise<object> =>
  request.post<loginResult>(API.LOGIN_URL, data)


// export const register = (data: ) => {
//   request.post(API.REGISTER_URL, data)
// }

export const getUserInfo = () => 
    request.get<userInfoResult>(API.USER_INFO_URL)
