// Attend que le contenu HTML soit entièrement chargé
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne l'élément avec la classe "slider"
    var slider = document.querySelector(".slider");
    
    // Sélectionne toutes les diapositives à l'intérieur du slider
    var slides = document.querySelectorAll(".slide");

    // Initialise l'index de la diapositive courante à 0
    var currentIndex = 0;

    // Met en place une fonction qui sera appelée toutes les 3 secondes
    setInterval(function() {
        // Incrémente l'index de la diapositive courante et assure la boucle
        currentIndex = (currentIndex + 1) % slides.length;

        // Met à jour le slider avec la nouvelle diapositive
        updateSlider();
    }, 3000);

    // Fonction pour mettre à jour la position du slider
    function updateSlider() {
        // Calcule la nouvelle position du slider en pourcentage
        var newPosition = -currentIndex * 100;

        // Applique la transformation CSS pour déplacer le slider
        slider.style.transform = "translateX(" + newPosition + "%)";
    }
});
