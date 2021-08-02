export const signup = async (email, password) => {
  const axios = require('axios')

  const userDetails = { email: email, password: password }
  

  const url = "http://localhost:3001/api/v1/signup"
  const res = await axios.post(url, {
    headers: { "Content-Type": "application/json" },
    user: userDetails
  });

  const accessToken = await res.headers.authorization
  const data = await res

  return { data, accessToken }
}