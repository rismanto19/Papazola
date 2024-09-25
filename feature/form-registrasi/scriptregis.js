document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departureDate').value;

    // Simpan data registrasi (di sini kita hanya menampilkan pesan)
    const message = `Registrasi berhasil!\nNama: ${fullName}\nEmail: ${email}\nNomor Telepon: ${phone}\nTujuan Wisata: ${destination}\nTanggal Keberangkatan: ${departureDate}`;
    
    document.getElementById('message').innerText = message;

    // Reset form
    this.reset();
});
