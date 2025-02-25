 
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", (e) => {
  password.setAttribute(
    "type",
    password.type === "password" ? "text" : "password"
  );

  // togglePassword.classList = "";
  togglePassword.classList =
    password.getAttribute("type") === "password" ? "bi bi-eye-slash" : "bi bi-eye";
});
 