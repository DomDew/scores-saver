export const login = async () => {
  try {
    const userDetails = { 
      user: {
      email: "juergen@dose.de", password: "123456"
      }
    }

    const url = "http://localhost:3001/api/v1/login"
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userDetails)
    });

    const accessToken = res.headers.get("Authorization")
    const data = await res.json()
  
    return { data, accessToken }

  }catch(err) {
    console.error(err)
  }
}