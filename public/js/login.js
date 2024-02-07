// This is an example file fo somthing that would be needed in the public js file.

const loginFormHandler = async (event) => {
  event.preventDefault()

<<<<<<< HEAD
  const email = document.querySelector("#email-login").ariaValueMax.trim()
  const password = document.querySelector("#password-login").value.trim()

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    })
=======
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
>>>>>>> 66e425a3ee9292259a1fa462d16ba553cc314584

    if (response.ok) {
      document.location.replace("/profile")
    } else {
      alert("Failed to log in")
      console.error("Failed to log in", response.statusText)
    }
  }
}
document.querySelector(".login-form").addEventListener("submit", loginFormHandler)
