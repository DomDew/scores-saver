import useLocalStorage from "./useLocalStorage";

export const login = async () => {
  try {
    const userDetails = { 
      user: {
      email: "juergen@dose.de", password: "123456"
      }
    }

    console.log(JSON.stringify(userDetails))

    const url = "http://localhost:3001/api/v1/login"
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userDetails)
    });
    console.log(res.status)
    console.log(res.headers.get('header_key'))
    console.log(res.headers.get('Authorization'))
    console.log(res)
    const data = await res.json()
    console.log(data)
    return data
  }catch(err) {
    console.error(err)
  }
}