window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollPos = window.scrollY || window.pageYOffset;
  
    if (scrollPos > 0) {
      navbar.classList.add('navbar-fixed');
    } else {
      navbar.classList.remove('navbar-fixed');
    }
  });
  