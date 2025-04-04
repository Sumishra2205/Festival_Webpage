// Countdown
const eventDate = new Date("2025-04-06T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = eventDate - now;
  const d = Math.floor(gap / (1000 * 60 * 60 * 24));
  const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((gap % (1000 * 60)) / 1000);
  document.getElementById("days").textContent = d.toString().padStart(2, '0');
  document.getElementById("hours").textContent = h.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = m.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = s.toString().padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Background slideshow
const images = document.querySelectorAll(".bg-image");
let currentIndex = 0;
function cycleBackground() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}
setInterval(cycleBackground, 5000);

// Bhajan Player
const bhajanSelect = document.getElementById("bhajanSelect");
const bhajanPlayer = document.getElementById("bhajanPlayer");

bhajanSelect.addEventListener("change", () => {
  bhajanPlayer.src = bhajanSelect.value;
  bhajanPlayer.play();
});

// Form
document.getElementById("donationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for Making this Celebration Larger 🙏");
  this.reset();
});


