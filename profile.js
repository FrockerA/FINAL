const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {
  alert("You need to log in first.");
  window.location.href = "login.html";
} else {
  const userProfile = document.getElementById("userProfile");
  userProfile.innerHTML = `
    <p><strong>Name:</strong> ${loggedInUser.fullName}</p>
    <p><strong>Email:</strong> ${loggedInUser.email}</p>
  `;

  const restaurants = ["Restaurant A", "Restaurant B", "Restaurant C"];
  const supermarkets = ["Supermarket X", "Supermarket Y", "Supermarket Z"];

  const restaurantSelect = document.getElementById("restaurantSelect");
  const supermarketSelect = document.getElementById("supermarketSelect");

  restaurants.forEach((restaurant, index) => {
    const option = document.createElement("option");
    option.value = restaurant;
    option.innerText = restaurant;
    restaurantSelect.appendChild(option);
  });

  supermarkets.forEach((supermarket, index) => {
    const option = document.createElement("option");
    option.value = supermarket;
    option.innerText = supermarket;
    supermarketSelect.appendChild(option);
  });

  restaurantSelect.addEventListener("change", (e) => {
    const selectedRestaurant = e.target.value;
    const restaurantRatingDiv = document.getElementById("restaurantRating");
    if (selectedRestaurant) {
      restaurantRatingDiv.innerHTML = `
        <label for="restaurantRatingSelect">Rate ${selectedRestaurant}:</label>
        <select id="restaurantRatingSelect">
          <option value="">Select Rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      `;
    } else {
      restaurantRatingDiv.innerHTML = "";
    }
  });

  supermarketSelect.addEventListener("change", (e) => {
    const selectedSupermarket = e.target.value;
    const supermarketRatingDiv = document.getElementById("supermarketRating");
    if (selectedSupermarket) {
      supermarketRatingDiv.innerHTML = `
        <label for="supermarketRatingSelect">Rate ${selectedSupermarket}:</label>
        <select id="supermarketRatingSelect">
          <option value="">Select Rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      `;
    } else {
      supermarketRatingDiv.innerHTML = "";
    }
  });
}

function logout() {
  localStorage.removeItem("loggedInUser");
  alert("Logged out successfully.");
  window.location.href = "login.html";
}
