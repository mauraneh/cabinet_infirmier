let menuLists = document.querySelectorAll(".menuItems");
let menuBurgers = document.querySelectorAll(".menuBurger");

menuBurgers.forEach(function(menuBurger, index) {
    menuBurger.addEventListener('click', function(){
        menuLists[index].classList.toggle('hide');
    });
});
