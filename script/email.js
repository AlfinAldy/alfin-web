// Inisialisasi EmailJS
(function() {
    emailjs.init("A8zVwgdl_bLqGQ6H7"); // ganti
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_5x58q14", "template_mf2abrl", this)
        .then(function() {
            alert("Pesan berhasil dikirim!");
        }, function(error) {
            alert("Gagal mengirim pesan: " + JSON.stringify(error));
        });
});