
// This code hides the preloading logo once the page is fully loaded
// window.addEventListener('load', function () {
//     var preloader = document.getElementById('preloader');
//     preloader.style.display = 'none';
// });

window.addEventListener('load', function () {
    document.querySelector('.photo-container').classList.add('show-photo');
});


// var typed = new Typed(".auto-type", {
//     strings: ["Coding", "Sleeping", "Eating"],
//     typeSpeed: 150,
// })