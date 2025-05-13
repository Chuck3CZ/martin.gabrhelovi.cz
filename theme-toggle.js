
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const hour = new Date().getHours();

  const useDark = localStorage.getItem("theme") === "dark" ||
                 (!localStorage.getItem("theme") && (prefersDark || hour >= 19 || hour < 7));

  if (useDark) {
    document.body.classList.add("dark");
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const theme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });
});
