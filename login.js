document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    const loginMessage = document.getElementById("loginMessage");
  

    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const user = users.find((u) => u.email === email && u.password === password);
  
    if (user) {
      loginMessage.textContent = "Login successful! Redirecting...";
      loginMessage.style.color = "green";
  
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      window.location.href = "profile.html";
    } else {
      loginMessage.textContent = "Invalid email or password.";
      loginMessage.style.color = "red";
    }
  });
  