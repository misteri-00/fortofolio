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

document.getElementById("whatsapp-form").addEventListener("submit", function (event) {
  event.preventDefault(); 
  // Ambil nilai input dari formulir
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
 
  const url = "https://api.whatsapp.com/send?phone=6282322807580&text=Halo%2C%20saya%20"+ name +"%20Email%3A%20"+ email +"%20Pesan%3A%20"+ message +"";

  // Arahkan pengguna ke WhatsApp
  window.open(url);
});
 



