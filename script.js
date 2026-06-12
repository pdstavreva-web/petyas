const card = document.getElementById("card");
const result = document.getElementById("result");
const message = document.getElementById("message");

function yes() {
  card.classList.add("hidden");
  result.classList.remove("hidden");
  message.innerText = "Great. You made the correct life decision 🎉";
  startConfetti();
}

function no() {
  card.classList.add("hidden");
  result.classList.remove("hidden");
  message.innerText = "Interesting choice. We will remember this.";
}

function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 10 + 2,
    color: `hsl(${Math.random() * 360}, 100%, 60%)`
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.r, p.r);

      p.y += p.d;
      if (p.y > canvas.height) p.y = 0;
    });

    requestAnimationFrame(draw);
  }

  draw();
}
