// Efek muncul saat scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const trigger = window.innerHeight * 0.85;
  
      if (sectionTop < trigger) {
        section.classList.add("show");
      }
    });
  });
  
  const texts = [
    "Halo, Saya Dika Al Kahpi",
    "Saya Mahasiswa Informatika",
  ];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';
  
  (function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
  
    document.querySelector(".typing-text").textContent = letter;
  
    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 1000); // jeda sebelum lanjut ke teks berikutnya
    } else {
      setTimeout(type, 100); // kecepatan mengetik
    }
  })();
  
  const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Ganti teks tombol
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});
