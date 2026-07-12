const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-menu-toggle]");
const form = document.querySelector("[data-lead-form]");
const note = document.querySelector("[data-form-note]");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};

const closeMenu = () => {
  document.body.classList.remove("menu-open");
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMenu();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const subject = encodeURIComponent("Elite Soldiers package review request");
  const body = encodeURIComponent(
    [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Package interest: ${data.get("package")}`,
      "",
      "Project details:",
      data.get("message")
    ].join("\n")
  );

  note.textContent = "Opening your email app with the request prefilled.";
  window.location.href = `mailto:info@elitesoldier.org?subject=${subject}&body=${body}`;
});
