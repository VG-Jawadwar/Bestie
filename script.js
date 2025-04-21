const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");
const heartsContainer = document.getElementById("hearts-container");

noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 100));
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  document.getElementById("btn-container").style.display = "none";

  setTimeout(() => {
    response.innerHTML = "I love you too 😘❤️";
    startHeartRain();
  }, 1000);
});

function startHeartRain() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 2) + "s";
    heart.innerHTML = "💖";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}
