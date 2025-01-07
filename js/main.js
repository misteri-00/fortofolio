// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman formulir biasa

  // Mengambil data dari formulir
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Validasi input (opsional)
  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Menyusun pesan yang akan dikirim ke WhatsApp
  var whatsappMessage = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
  var whatsappURL = "https://wa.me/6282322807580?text=" + encodeURIComponent(whatsappMessage);

  // Arahkan pengguna ke WhatsApp dengan pesan
  window.open(whatsappURL, "_blank");
});
