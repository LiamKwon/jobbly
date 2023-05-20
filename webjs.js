window.onload = function () {
  console.log("hi");
  // Get the sign-up button and modal window elements
  const signUpButton = document.getElementById("signup-button");
  const signUpModal = document.getElementById("signup-modal");

  // Get the close button element
  const closeButton = signUpModal.querySelector(".close");

  // Open the modal window when the sign-up button is clicked
  signUpButton.addEventListener("click", () => {
    signUpModal.style.display = "block";
    console.log("hi");
  });

  // Close the modal window when the close button is clicked
  closeButton.addEventListener("click", () => {
    signUpModal.style.display = "none";
  });

  // Close the modal window when the user clicks outside of it
  window.addEventListener("click", (event) => {
    if (event.target === signUpModal) {
      signUpModal.style.display = "none";
    }
  });
};

function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "YOUR_GOOGLE_CLIENT_ID",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" } // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
};
