document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default
    alert('Pesan Anda telah dikirim!'); // Menampilkan pesan konfirmasi
    this.reset(); // Mengatur ulang formulir
});