let mood = "biasa";

const data = {
  senang: [
    { text: "Syukuri hal kecil nyang kamu dapat hari ini 😊✨", img: "syukuri.jpeg" },
    { text: "Hari ini penuh dengan kejutan baik 🌟", img: "syukuri.jpeg" },
    { text: "Senang itu energi positif 💖", img: "syukuri.jpeg" }
  ],
  biasa: [
    { text: "Tidak semua proses harus terlihat cepat, tidak semua usaha langsung menghasilkan tepuk tangan 😉😎", img: "pelan.jpeg" },
    { text: "Setiap langkah kecilmu sangat berarti 🤗", img: "pelan.jpeg" },
    { text: "Biasa hari ini, luar biasa besok 💗", img: "pelan.jpeg" }
  ],
  // capek: [
    { text: "Istirahat bukan berarti gagal, tetapi strategi agar bisa melangkah lebih jauh 🥰🤍", img: "istirahat.jpeg" },
    { text: "Capek itu sinyal untuk berhenti sejenak 😴", img: "istirahat.jpeg" },
    { text: "Kamu sudah berusaha cukup hari ini 💪", img: "istirahat.jpeg" }
  ]
};

function setMood(selected) {
  mood = selected;
  localStorage.setItem("mood", mood);

  let text = "";
  if (mood === "senang") text = "Hari ini terasa cerah 🌤️";
  if (mood === "biasa") text = "Hari biasa pun tetap berarti 🌱";
  if (mood === "capek") text = "Capek itu wajar, kamu manusia 🤍";

  document.getElementById("moodText").innerText = text;
  nextQuote();
}

function nextQuote() {
  const items = data[mood];
  const randomIndex = Math.floor(Math.random() * items.length);
  const item = items[randomIndex];
  document.getElementById("quote").innerText = item.text;
  document.getElementById("image").src = item.img;
}

function simpanTarget() {
  const target = document.getElementById("targetInput").value;
  localStorage.setItem("target", target);
  document.getElementById("targetHasil").innerText =
    target ? "✅ Target hari ini: " + target : "";
}

function simpanQuote() {
  const quote = document.getElementById("quote").innerText;
  localStorage.setItem("quoteFavorit", quote);
  document.getElementById("savedInfo").innerText = "Quote disimpan ✨";
}

function toggleDark() {
  document.body.classList.toggle("dark");
}



