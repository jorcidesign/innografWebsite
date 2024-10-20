document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Al hacer clic en el ícono de la hamburguesa, abre el menú móvil
document.getElementById('burger-menu').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.add('active');
  });
  
  // Al hacer clic en el ícono de la X, cierra el menú móvil
  document.getElementById('close-menu').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.remove('active');
  });