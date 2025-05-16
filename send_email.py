import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email(nama, email, pesan):
    # Konfigurasi SMTP server dan akun email pengirim
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587
    sender_email = 'your-email@gmail.com'  # Ganti dengan alamat email pengirim
    sender_password = 'your-password'  # Ganti dengan kata sandi email pengirim

    # Membuat objek pesan email
    msg = MIMEMultipart()
    msg['From'] = email
    msg['To'] = 'rasya25042007@gmail.com'  # Ganti dengan alamat email penerima
    msg['Subject'] = 'Pesan dari Formulir Kontak'

    # Menambahkan isi pesan
    body = f'Nama: {nama}\nEmail: {email}\nPesan: {pesan}'
    msg.attach(MIMEText(body, 'plain'))

    # Mengirim pesan melalui SMTP server
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()
        server.login(sender_email, sender_password)
        server.send_message(msg)
        server.quit()

# Contoh penggunaan
send_email('John Doe', 'john.doe@example.com', 'Halo, ini adalah pesan dari formulir kontak.')
