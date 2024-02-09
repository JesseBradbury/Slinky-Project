const waveFormHandler = async (event) => {
    event.preventDefault()

    const steps = document.querySelector("#wavesteps-create").value.trim();
    const time = document.querySelector("#wavetime-create").value.trim();
    const comment = document.querySelector("#wavecomment-create").value.trim();

    // This is used to get the spot_id for the post from the URL. used ChatGPT for help with the regular expression.
    // Get the current URL
    const currentUrl = window.location.href;
    // Use a regular expression to extract the spot ID
    const match = currentUrl.match(/\/spots\/(\d+)/);
    // Check if a match is found
    if (match) {
        // The spot ID will be in the second capturing group (index 1)
        const spotId = match[1];


        if (steps && time && comment) {
            const response = await fetch(`/api/waves/${spotId}`, {
                method: "POST",
                body: JSON.stringify({ steps, time, comment }),
                headers: { "Content-Type": "application/json" }
            })

            if (response.ok) {
                document.location.replace(`/spots/${spotId}`)
            } else {
                alert("Failed to add spot")
                console.error("Failed to add spot:", response.statusText)
            }
        }
    } else {
        console.error("Unable to extract spot ID from the URL");
    }
}

document
    .querySelector(".wave-form")
    .addEventListener("submit", waveFormHandler)
