// List of zones to display — add/remove as needed
const timeZones = [
  { name: "Montana", zone: "America/Denver" },
  { name: "Arizona", zone: "America/Phoenix" },
  { name: "California", zone: "America/Los_Angeles" },
  { name: "Louisiana", zone: "America/Chicago" },
  { name: "Oregon", zone: "America/Los_Angeles" },
  { name: "Minnesota", zone: "America/Chicago" }
];

function buildClocks() {
  const container = document.getElementById("clocks-container");
  container.innerHTML = ""; // Clear any existing content

  timeZones.forEach(({ name, zone }) => {
    const clock = document.createElement("div");
    clock.className = "clock";
    clock.dataset.zone = zone;

    clock.innerHTML = `
            <div class="zone">${name}</div>
            <div class="time">Loading...</div>
            <div class="tz-label">${zone}</div>
        `;

    container.appendChild(clock);
  });
}

function updateClocks() {
  const clocks = document.querySelectorAll(".clock");

  clocks.forEach((clock) => {
    const zone = clock.dataset.zone;

    const time = new Date().toLocaleTimeString("en-US", {
      timeZone: zone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });

    clock.querySelector(".time").textContent = time;
  });
}

// Initialize clocks and update every 30 seconds
buildClocks();
updateClocks();
setInterval(updateClocks, 30000);
