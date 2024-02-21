import { MockMethod } from "vite-plugin-mock"
function createUserList() {
  return [
    {
      userid: "1",
      username: "admin",
      password: "123456",
      token: "admin123456",
    },
    {
      userid: "2",
      username: "test",
      password: "123456",
      token: "test123456",
    },
  ]
}

export default [
  {
    url: "/api/get",
    method: "get",
    response: ({ query }) => {
      console.log(query)
      return { code: 200, data: 'hello world!' }
    },
  },
  {
    url: "/api/user/login",
    method: "post",
    response: ({ body }) => {
      const { username, password } = body
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password,
      )
      if (!checkUser) {
        return { code: 401, message: "用户名或密码错误" }
      }
      const { token } = checkUser
      return { code: 200, data: { token } }
    },
  },
  {
    url: "/api/user/info",
    method: "get",
    response: ({ headers }) => {
      const token = headers.token
      const checkUser = createUserList().find((item) => item.token === token)
      if (!checkUser) {
        return { code: 401, message: "token失效" }
      }
      return { code: 200, data: { checkUser } }
    },
  },
] as MockMethod[]
