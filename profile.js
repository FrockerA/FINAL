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
  const restaurantList = document.getElementById("restaurantList");

  restaurants.forEach((restaurant) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${restaurant}</p>
      <select>
        <option value="">Rate</option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
    `;
    restaurantList.appendChild(div);
  });
}

function logout() {
  localStorage.removeItem("loggedInUser");
  alert("Logged out successfully.");
  window.location.href = "login.html";
}
