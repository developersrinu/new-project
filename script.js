document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Get form values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Generate a random 16-byte access token
    const accessToken = generateAccessToken();
  
    // Store user data in local storage
    const user = {
      username: username,
      email: email,
      accessToken: accessToken,
    };
    localStorage.setItem("user", JSON.stringify(user));
  
    // Display success message and redirect to the profile page
    displayMessage("Success! You are now signed up.", "success");
    setTimeout(() => {
      window.location.href = "profile.html";
    }, 2000);
  });
  
  function generateAccessToken() {
    // This is a simple implementation to generate a random access token
    // In production, use a more secure method to generate access tokens
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }
    return token;
  }
  
  function displayMessage(message, messageType) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
    messageDiv.className = messageType;
  }
  

