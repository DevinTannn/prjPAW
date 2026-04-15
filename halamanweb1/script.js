window.addEventListener("scroll", function() {
  let elements = document.querySelectorAll(".animasi");

  elements.forEach(el => {
    let posisi = el.getBoundingClientRect().top;
    let tinggiLayar = window.innerHeight;

    if (posisi < tinggiLayar - 100) {
      el.classList.add("muncul");
    }
  });
});

/* tombol hero */
function halo() {
  alert("Selamat datang di Agro Sawit Nusantara!");
}

/* form */
function kirim() {
  let nama = document.getElementById("nama").value;

  if (nama === "") {
    alert("Nama harus diisi!");
  } else {
    alert("Pesan berhasil dikirim, " + nama);

    // RESET FORM
    document.getElementById("formKontak").reset();
  }
}

window.addEventListener("scroll", function() {
  let navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});