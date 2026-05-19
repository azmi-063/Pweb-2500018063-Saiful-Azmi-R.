function kirimPesan() {
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let pesan = document.getElementById("pesan").value;

  document.getElementById("output").innerText =
    "Terima kasih " + nama + "! Pesanmu sudah terkirim.";

  return false; // mencegah reload halaman
}
function tampilkanGambar(id) {
  const gambar = document.getElementById(id);
  // toggle: jika gambar tersembunyi → tampilkan, jika tampil → sembunyikan
  if (gambar.style.display === "none") {
    gambar.style.display = "block";
  } else {
    gambar.style.display = "none";
  }
}