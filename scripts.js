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

// Espera a que todo el contenido de la página se cargue
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    
    // Asegúrate de que el loader se muestre al menos durante 2 segundos
    setTimeout(function() {
      loader.classList.add('hidden');
    }, 2000); // 2000 ms = 2 segundos
  });
  