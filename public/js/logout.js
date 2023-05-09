// Define a logout function to handle user logout
const logout = async () => {
  // Send a POST request to the server to logout the user
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  // If the response is successful, redirect the user to the homepage
  if (response.ok) {
    document.location.replace("/");
  } else {
    // If the response is not successful, alert the user that logout failed
    alert("Failed to log out.");
  }
};

// Attach the logout function to the logout button on the page
document.querySelector("#logout").addEventListener("click", logout);
