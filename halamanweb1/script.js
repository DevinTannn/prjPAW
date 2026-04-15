function halo(){
  alert("Selamat datang di website kami!");
}

function kirim(){  
  let nama = document.getElementById("nama").value;  
  if(nama === ""){
    alert("Nama harus diisi dulu!");
    return;
  }

  alert("Terima kasih, " + nama + "! Pesan berhasil dikirim!");  
  document.getElementById("formKontak").reset(); 
}

function terms(){
  alert("Konten dilindungi hak cipta. Dilarang menyalin tanpa izin.");
}