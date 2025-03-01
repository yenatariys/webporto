document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesan Anda telah dikirim!');
    this.reset();
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (name && email && message) {
        alert('Pesan Anda telah dikirim!');
        this.reset();
    } else {
        alert('Silakan lengkapi semua field.');
    }
});