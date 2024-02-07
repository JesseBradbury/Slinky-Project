// This is an example file fo somthing that would be needed in the public js file.

const loginFormHandler = async (event) => {
  event.preventDefault()

  const email = document.querySelector("#email-login").ariaValueMax.trim()
  const password = document.querySelector("#password-login").value.trim()

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    })

    if (response.ok) {
      document.location.replace("/profile")
    } else {
      alert("Failed to log in")
      console.error("Failed to log in", response.statusText)
    }
  }
}
document.querySelector(".login-form").addEventListener("submit", loginFormHandler)
