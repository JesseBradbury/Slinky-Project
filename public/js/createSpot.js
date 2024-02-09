const spotFormHandler = async (event) => {
    event.preventDefault()
  
    const spot_name = document.querySelector("#spotname-create").value.trim();
    const steps = document.querySelector("#steps-create").value.trim();
    const city = document.querySelector("#city-create").value.trim();
    const state = document.querySelector("#state-create").value.trim();
    const location = document.querySelector("#location-create").value.trim();
    const description = document.querySelector("#description-create").value.trim()

  
    if (spot_name && steps && city && state && location && description) {
      const response = await fetch("/api/spots", {
        method: "POST",
        body: JSON.stringify({spot_name, steps, city, state, location, description}),
        headers: { "Content-Type": "application/json" }
      })
  
      if (response.ok) {
        document.location.replace("/spots")
      } else {
        alert("Failed to add spot")
        console.error("Failed to add spot:", response.statusText)
      }
    }
  }
  
  document
    .querySelector(".spot-form")
    .addEventListener("submit", spotFormHandler)
  