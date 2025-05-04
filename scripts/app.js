const tileData = [
  { text: "Networking", color: "#0066cc" },
  { text: "Cybersecurity", color: "#228B22" },
  { text: "JavaScript", color: "#f7df1e", textColor: "#000" },
  { text: "Linux", color: "#ff6600" },
  { text: "GitHub", color: "#000" },
  { text: "HTML5 / CSS3", color: "#e44d26" },
  { text: "MacOS", color: "#555" },
  { text: "Windows Server", color: "#0078D7" },
  { text: "PC Build / Repair", color: "#6f42c1" },
  { text: "Photoshop", color: "#001f5e" },
  { text: "Illustrator", color: "#ff9a00" },
  { text: "Server Admin", color: "#003366" },
  { text: "IT Support", color: "#333" },
  { text: "Dev Tools", color: "#2c3e50" }
];

let currentStartIndex = 0;

function updateTiles() {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach((tile, index) => {
    tile.classList.remove('active');

    setTimeout(() => {
      const dataIndex = (currentStartIndex + index) % tileData.length;
      const item = tileData[dataIndex];

      tile.textContent = item.text;
      tile.style.backgroundColor = item.color;
      tile.style.color = item.textColor || "white";
      tile.classList.add('active');
    }, 100);
  });

  currentStartIndex = (currentStartIndex + 1) % tileData.length;
}

setInterval(updateTiles, 4000);

const skillsData = [
  {
    name: "HTML5",
    image: "assets/images/html5_card.jpg",
    description: "Semantic structure, accessibility, and cleaner markup."
  },
  {
    name: "CSS3",
    image: "assets/images/css3_card.jpg",
    description: "Responsive layouts, styling, animations, and media queries."
  },
  {
    name: "JavaScript",
    image: "assets/images/javascript_card.jpg",
    description: "DOM manipulation, async logic, and UI interaction."
  },
  {
    name: "Git & GitHub",
    image: "assets/images/github_card.jpg",
    description: "Version control, branching, and collaborative coding."
  },
  {
    name: "Linux",
    image: "assets/images/linux_card.jpg",
    description: "Command line, scripting, system management, server admin."
  },
  {
    name: "Windows Server",
    image: "assets/images/windows_card.jpg",
    description: "Active Directory, Group Policy, and PowerShell automation."
  },
  {
    name: "MacOS",
    image: "assets/images/macos_card.jpg",
    description: "macOS user management, terminal, and AppleScript basics."
  },
  {
    name: "Cybersecurity",
    image: "assets/images/cybersecurity_card.jpg",
    description: "Hardening systems, password policies, and threat awareness."
  },
  {
    name: "Networking",
    image: "assets/images/networking_card.jpg",
    description: "TCP/IP, routing, DNS, DHCP, and physical infrastructure."
  },
  {
    name: "PC Build / Repair",
    image: "assets/images/pcbuildrepair_card.jpg",
    description: "Custom builds, diagnostics, hardware installation and repair."
  },
  {
    name: "Photoshop",
    image: "assets/images/photoshop_card.jpg",
    description: "Image manipulation, graphics creation, UI design basics."
  },
  {
    name: "Illustrator",
    image: "assets/images/illustrator_card.jpg",
    description: "Vector design, icons, and layout for web/dev work."
  },
  {
    name: "IT Support",
    image: "assets/images/itsupport_card.jpg",
    description: "Technical support, troubleshooting, user training."
  },
  {
    name: "Dev Tools",
    image: "assets/images/devtools_card.jpg",
    description: "Browser DevTools, VS Code, extensions, and workflow."
  },
  {
    name: "Quality",
    image: "assets/images/quality_card.jpg",
    description: "Continuous improvement, client retention."
  }
];

const skillsSection = document.querySelector("#skills .skills-list");
skillsSection.innerHTML = "";

skillsData.forEach(skill => {
  const card = document.createElement("div");
  card.className = "skill-card";
  card.innerHTML = `
    <img src="${skill.image}" alt="${skill.name} Icon">
    <h3>${skill.name}</h3>
    <p>${skill.description}</p>
  `;
  skillsSection.appendChild(card);
});

document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

const modal = document.querySelector("#accomplishmentModal");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const closeBtn = document.querySelector(".close-button");

document.querySelectorAll(".accomplishment-block").forEach(block => {
  block.addEventListener("click", () => {
    modalTitle.textContent = block.dataset.title || "Details";
    modalDescription.textContent = block.dataset.description || "More info coming soon.";
    modal.classList.add("visible");
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});