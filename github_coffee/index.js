// Добавляем обработчик события для кнопки переключения навбара
var navbarToggler = document.querySelector(".navbar-toggler");
var navbarNav = document.querySelector("#navbarNav");

navbarToggler.addEventListener("click", function () {
  navbarNav.classList.toggle("collapsed");
});

// Добавляем обработчик события при прокрутке страницы
window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  if (window.pageYOffset > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
