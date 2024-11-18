document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    alert("You need to log in first.");
    window.location.href = "login.html";
    return;
  }

  // Display user profile
  const userProfile = document.getElementById("userProfile");
  userProfile.innerHTML = `
    <p><strong>Name:</strong> ${loggedInUser.fullName}</p>
    <p><strong>Email:</strong> ${loggedInUser.email}</p>
  `;

  // Initialize restaurants and supermarkets
  const restaurants = ["Restaurant A", "Restaurant B", "Restaurant C"];
  const supermarkets = ["Supermarket X", "Supermarket Y", "Supermarket Z"];

  populateDropdown("restaurantSelect", restaurants, "restaurantRating");
  populateDropdown("supermarketSelect", supermarkets, "supermarketRating");

  displayPreviousRatings();
});

function populateDropdown(selectId, options, ratingDivId) {
  const selectElement = document.getElementById(selectId);
  selectElement.innerHTML = `<option value="">Select an option</option>`; // Reset options
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    selectElement.appendChild(optionElement);
  });

  selectElement.addEventListener("change", (e) => {
    const selectedValue = e.target.value;
    const ratingDiv = document.getElementById(ratingDivId);
    if (selectedValue) {
      ratingDiv.innerHTML = `
        <label for="${ratingDivId}Select">Rate ${selectedValue}:</label>
        <select id="${ratingDivId}Select">
          <option value="">Select Rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      `;
    } else {
      ratingDiv.innerHTML = ""; // Clear if nothing is selected
    }
  });
}

function submitRating() {
  const restaurantSelect = document.getElementById("restaurantSelect");
  const supermarketSelect = document.getElementById("supermarketSelect");
  const restaurantRatingSelect = document.getElementById("restaurantRatingSelect");
  const supermarketRatingSelect = document.getElementById("supermarketRatingSelect");

  const ratings = [];

  if (restaurantSelect.value && restaurantRatingSelect?.value) {
    ratings.push({
      type: "Restaurant",
      name: restaurantSelect.value,
      rating: restaurantRatingSelect.value,
    });
  }

  if (supermarketSelect.value && supermarketRatingSelect?.value) {
    ratings.push({
      type: "Supermarket",
      name: supermarketSelect.value,
      rating: supermarketRatingSelect.value,
    });
  }

  if (ratings.length === 0) {
    alert("Please select a rating before submitting.");
    return;
  }

  saveRatings(ratings);
  displayPreviousRatings();
  animateSubmission();
}

function saveRatings(ratings) {
  const storedRatings = JSON.parse(localStorage.getItem("ratings")) || [];
  localStorage.setItem("ratings", JSON.stringify([...storedRatings, ...ratings]));
}

function displayPreviousRatings() {
  const ratings = JSON.parse(localStorage.getItem("ratings")) || [];
  const displayRatings = document.getElementById("displayRatings");

  displayRatings.innerHTML = ratings
    .map(
      (r) =>
        `<div class="highlight">${r.type}: ${r.name} - ${r.rating} Stars</div>`
    )
    .join("");
}

function animateSubmission() {
  const ratingsSection = document.getElementById("submittedRatings");
  ratingsSection.classList.add("highlight");
  setTimeout(() => {
    ratingsSection.classList.remove("highlight");
  }, 1500);
}

function logout() {
  localStorage.removeItem("loggedInUser");
  alert("Logged out successfully.");
  window.location.href = "login.html";
}
