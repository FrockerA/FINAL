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
  
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      messageDiv.textContent = "User already exists with this email.";
      messageDiv.style.color = "red";
      return;
    }
  

    users.push({ fullName, email, password });
  
    localStorage.setItem("users", JSON.stringify(users));
  
    messageDiv.textContent = "Sign-up successful! You can now log in.";
    messageDiv.style.color = "green";
  
    document.getElementById("signUpForm").reset();
  });
  