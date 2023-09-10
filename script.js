var buttons = document.querySelectorAll(".btn");

// Her bir buton için click olayını dinle
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Butona tıklandığında altındaki text-box'ı bul
        var textBox = button.nextElementSibling;

        // text-box'ın görünürlüğünü kontrol et
        if (textBox.style.display === "block") {
            textBox.style.display = "none"; // Eğer görünürse gizle
        } else {
            textBox.style.display = "block"; // Eğer gizliyse görünür yap
        }
    });
});