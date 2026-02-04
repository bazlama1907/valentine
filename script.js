const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const afterAnswer = document.getElementById("afterAnswer");

yesBtn.addEventListener("click", () => {
  afterAnswer.classList.remove("hidden");
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
