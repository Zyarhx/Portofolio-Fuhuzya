const nodemailer = require('nodemailer');

// Konfigurasi transporter untuk mengirim email
const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
        user: 'your-email@example.com',
        pass: 'your-password'
    }
});

// Mengirim email
const sendEmail = async(nama, email, pesan) => {
    try {
        const info = await transporter.sendMail({
            from: email,
            to: 'rasya25042007@gmail.com', // Ganti dengan alamat email tujuan
            subject: 'Pesan dari ' + nama,
            text: 'Nama: ' + nama + '\n' +
                'Email: ' + email + '\n' +
                'Pesan: ' + pesan
        });
        console.log('Email berhasil dikirim: ' + info.messageId);
    } catch (error) {
        console.error('Terjadi kesalahan dalam pengiriman email: ' + error);
    }
};

// Menggunakan fungsi sendEmail saat menerima permintaan HTTP POST dari formulir HTML
// Contoh menggunakan framework Express.js
app.post('/send_email', (req, res) => {
    const nama = req.body.nama;
    const email = req.body.email;
    const pesan = req.body.pesan;

    sendEmail(nama, email, pesan);

    res.send('Email berhasil dikirim.');
});