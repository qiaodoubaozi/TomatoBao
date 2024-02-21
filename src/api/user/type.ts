interface userInfo {
    userid: string
    username: string
    password: string
    token: string
}

export interface loginForm {
  username: string
  password: string
}

export interface loginResult {
    code: number
    data: { token: string }
}

export interface userInfoResult {
    code: number
    data: { user: userInfo }
}
