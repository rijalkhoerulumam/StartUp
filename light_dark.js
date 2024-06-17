function toggleMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
}

const profileButton = document.getElementById("profile-button");
const navList = document.querySelector("nav ul");

profileButton.addEventListener("click", () => {
  navList.classList.toggle("open");
});
