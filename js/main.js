document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      toggle.textContent = open ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      toggle.textContent = "☰";
    }));
  }
  document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());
  const date = document.getElementById("preferred-date");
  if (date) {
    const today = new Date();
    const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    date.min = localDate;
  }
  const serviceSelect = document.getElementById("service-select");
  if (serviceSelect) {
    const service = new URLSearchParams(window.location.search).get("service");
    if (service) {
      const match = Array.from(serviceSelect.options).find(option => option.text.toLowerCase().includes(decodeURIComponent(service).toLowerCase()));
      if (match) serviceSelect.value = match.value;
    }
  }
});