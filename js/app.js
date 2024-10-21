// Función para cargar contenido dinámico en #app
function loadContent(page) {

    
    const app = document.getElementById('app');

     // Aplica la clase fade-out antes de cambiar el contenido
     app.classList.add('fade-out');

    // Realizamos una petición para cargar el contenido de la página desde la carpeta pages
    fetch(`pages/${page}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Página no encontrada');
            }
            return response.text();
        })
        .then(data => {
            app.innerHTML = data; // Insertamos el contenido en el div #app
            scrollToSection(page); // Hacemos scroll a la sección correspondiente (si es necesario)
        })
        .catch(error => {
            app.innerHTML = '<h2>Error 404: Página no encontrada</h2>'; // Página no encontrada
        });
}

// Función para manejar la navegación
function handleNavigation() {
    const page = window.location.hash.substring(1) || 'home'; // Si no hay hash, carga home por defecto
    loadContent(page); // Cargamos la página correspondiente
}

// Detecta cambios en el hash de la URL
window.addEventListener('hashchange', handleNavigation);

// Carga inicial cuando se abre la página
window.addEventListener('load', handleNavigation);

// Función para hacer scroll al elemento cargado dinámicamente (si es necesario)
function scrollToSection(page) {
    const target = document.getElementById(page); // Intentamos encontrar el elemento con el ID de la página
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' }); // Hacemos scroll suave si el elemento existe
    }
}
// Añadimos los eventos de click a los enlaces del navbar
function addNavbarListeners() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const logoLink = document.querySelector('.logo a'); // Seleccionamos el logo

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que el enlace haga un comportamiento por defecto
            const hash = link.getAttribute('href'); // Obtén el hash del enlace
            window.location.hash = hash; // Cambia el hash en la URL (lo que activará handleNavigation)
        });
    });

     // Listener para el logo
     logoLink.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto
        window.location.hash = '#home'; // Redirige al home cambiando el hash
    });
}


// Función para manejar el menú móvil
function addMobileMenuListeners() {
    const burgerMenu = document.getElementById('burger-menu');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    // Abrir el menú móvil
    burgerMenu.addEventListener('click', () => {
        mobileMenu.classList.add('active'); // Muestra el menú móvil
    });

    // Cerrar el menú móvil
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active'); // Oculta el menú móvil
    });

    // Listener para los enlaces del menú móvil
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita el comportamiento por defecto
            const hash = link.getAttribute('href'); // Obtén el hash del enlace
            window.location.hash = hash; // Cambia el hash en la URL (lo que activará handleNavigation)

            mobileMenu.classList.remove('active'); // Cierra el menú móvil después de hacer clic
        });
    });
}

// Detecta cambios en el hash de la URL
window.addEventListener('hashchange', handleNavigation);

// Carga inicial cuando se abre la página
window.addEventListener('load', () => {
    handleNavigation(); // Cargamos la página inicial según el hash actual o 'home'
    addNavbarListeners(); // Añadimos los listeners al navbar
    addMobileMenuListeners(); // Añadimos los listeners al menú móvil
});




