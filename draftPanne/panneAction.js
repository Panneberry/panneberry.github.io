
window.addEventListener('load', function () {
    document.querySelector('.photo-container').classList.add('show-photo');
});


// var typed = new Typed(".auto-type", {
//     strings: ["Coding", "Sleeping", "Eating"],
//     typeSpeed: 150,
// })

var typed = new Typed(".auto-type", {
    strings: ["thinking", "coding", "sleepy"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

var menu = document.getElementById("menu");
    function closemenu(){
        menu.style.top = "-100vh";
    }
    function openmenu(){
        menu.style.top = "0";
    }

    // test