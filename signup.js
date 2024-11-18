document.getElementById("signUpForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
  
    const messageDiv = document.getElementById("message");
  
    if (!fullName || !email || !password || !confirmPassword) {
      messageDiv.textContent = "Please fill in all fields.";
      messageDiv.style.color = "red";
      return;
    }
  
    if (password !== confirmPassword) {
      messageDiv.textContent = "Passwords do not match.";
      messageDiv.style.color = "red";
      return;
    }
  
    // Retrieve existing users or initialize an empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if the user already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      messageDiv.textContent = "User already exists with this email.";
      messageDiv.style.color = "red";
      return;
    }
  
    // Add the new user
    users.push({ fullName, email, password });
  
    // Save to localStorage
    localStorage.setItem("users", JSON.stringify(users));
  
    messageDiv.textContent = "Sign-up successful! You can now log in.";
    messageDiv.style.color = "green";
  
    // Clear the form
    document.getElementById("signUpForm").reset();
  });
  