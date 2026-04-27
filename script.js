// Update recruiting status here later if needed.
const recruitingStatus = [
  { role: "Guitarists", status: "Open" },
  { role: "Bassist", status: "Open" },
  { role: "Vocalists", status: "Open" },
];

const statusList = document.getElementById("status-list");

if (statusList) {
  recruitingStatus.forEach((item) => {
    const card = document.createElement("article");
    card.className = "status-card";
    card.innerHTML = `
      <span class="status-role">${item.role}</span>
      <span class="status-value">${item.status}</span>
    `;
    statusList.appendChild(card);
  });
}

const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (!targetElement) {
      return;
    }

    event.preventDefault();
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
