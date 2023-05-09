// This function handles the form submission for user login
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Get the user's email and password input values
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  // If the email and password fields are not empty
  if (email && password) {
    // Send a POST request to the server with the user's credentials
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If the response is successful, redirect the user to the homepage
    if (response.ok) {
      document.location.replace("/");
    } else {
      // If the response is not successful, display an error message
      alert("Failed to log in.");
    }
  }
};

// This function handles the form submission for user signup
const signupFormHandler = async (event) => {
  event.preventDefault();

  // Get the user's name, email, and password input values
  const name = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  // If all fields are not empty
  if (name && email && password) {
    // Send a POST request to the server with the user's information
    const response = await fetch("/api/user/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If the response is successful, redirect the user to the homepage
    if (response.ok) {
      document.location.replace("/");
    } else {
      // If the response is not successful, display an error message
      alert("Failed to sign up.");
    }
  }
};

// Add event listeners to the login and signup forms
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
