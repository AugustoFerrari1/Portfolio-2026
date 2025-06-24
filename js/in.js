document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.sobremi .contenedor p, .sobremi .contenedor h2, .sobremi .contenedor h2 span, .trabajos p, .trabajos .container .caja1, .contacto p, .contacto h2, .atributos .tipo, .atributos .nombre, .progress ', {
        duration: 2000,      // Duración de la animación (2 segundos)
        origin: 'left',      // Animación desde la izquierda
        distance: '100px',   // Distancia que el texto recorrerá al aparecer
        opacity: 0,          // Inicia con opacidad 0 y aparece
        easing: 'ease-in-out', // Animación suave
        reset: true         // La animación ocurre solo una vez, no se reinicia al hacer scroll hacia arriba
    });

    const sobremi = document.getElementById('sobremibtn');
    const sobremiSection = document.getElementById('sobremi');
    const atributos = document.getElementById('atributosbtn');
    const atributosSection = document.getElementById('atributos');
    const trabajos = document.getElementById('trabajosbtn');
    const trabajosSection = document.getElementById('trabajos');
    const contacto = document.getElementById('contactobtn');
    const contactoSection = document.getElementById('contacto');

    sobremi.addEventListener('click', function() {
        sobremiSection.scrollIntoView({ behavior: 'smooth' });
    });

    atributos.addEventListener('click', function() {
        atributosSection.scrollIntoView({ behavior: 'smooth' });
    });

    trabajos.addEventListener('click', function() {
        trabajosSection.scrollIntoView({ behavior: 'smooth' });
    });

    contacto.addEventListener('click', function() {
        contactoSection.scrollIntoView({ behavior: 'smooth' });
    });
});

function direciones(element) {
    
    const url = element.getAttribute('data-url');
    
    window.open(url, '_blank');
}

function cambiarLenguaje() {
    const lenguajebtn = document.getElementById('lenguajebtn');
    const ingles = lenguajebtn.textContent === 'EN';

    if (ingles) {
        lenguajebtn.textContent = 'ES';

        document.getElementById('sobremibtn').textContent = 'ABOUT ME';
        document.getElementById('trabajosbtn').textContent = 'WORKS';
        document.getElementById('contactobtn').textContent = 'CONTACT';
        document.querySelector('.inicio h2').innerHTML = 'Efficiency and creativity <br> <span>in every line</span><br> of code';
        document.querySelector('.sobremi .nombre').textContent = 'ABOUT ME';
        document.querySelector('.sobremi .desc').innerHTML = 'Systems Engineering student at <span>ORT</span> Uruguay (3rd semester). Previously took a course in <span>web development</span> and <span>Databases</span> (PHP - MYSQL).';
        document.getElementById('espacio').textContent = 'EXPERIENCE';
        document.querySelector('.izdadcha1').innerHTML = '<span>✮</span>  WEB <span>DEVELOPMENT</span>';
        document.querySelector('.izdadcha2').innerHTML = '<span>✮</span>  APPLICATION <span>DEVELOPMENT</span>';
        document.querySelector('.izdadcha3').innerHTML = '<span>✮</span>  Automation and logistics with <span>TAILORED</span> <span>SYSTEMS</span>';
        document.querySelector('.izdadcha4').innerHTML = '<span>✮</span>  Design of <span>MANAGEMENT</span> interfaces';
        document.querySelector('.izdadcha5').innerHTML = '<span>✮</span>  Administration and management of <span>DATABASES</span>';
        document.querySelector('.atributos .nombre').textContent = 'ATTRIBUTES';
        document.querySelector('.atributos .tipo').textContent = 'GRAPHIC INTERFACE';
        document.querySelector('.atributos .tipo2').textContent = 'LANGUAGES';
        document.querySelector('.trabajos .nombre').textContent = 'WORKS';
        document.querySelector('.caja1 .titulo').textContent = 'AUTOMOTIVE';
        document.querySelector('.caja1 .desc').innerHTML = 'We developed a comprehensive <span>website</span> for a car dealership, designed to offer a <span>complete</span> and <span>personalized user experience</span>. The platform includes a <span>full account and profile system</span>, allowing users to <span>edit</span> all fields of their personal information in a <span>simple and secure</span> way.<br><br> Additionally, we have implemented a versatile <span>shopping cart</span> that allows customers to <span>reserve</span>, <span>rent</span>, and <span>purchase</span> vehicles online, with an intuitive and secure payment process.<br><br> For <span>internal management</span>, we developed an advanced <span>backend</span> that centralizes all operations. This system includes <span>user and permission control</span>, allowing the administration to <span>add employees</span> with different <span>access levels</span> based on their <span>roles</span>. The available administration options include <span>user management</span>, <span>vehicle inventory</span>, <span>detailed specifications of each car</span>, <span>purchases</span>, <span>reservations</span>, and other critical business functions.';
        document.querySelector('.caja1 #desc2').innerHTML = 'We developed a specialized <span>website</span> for the <span>sale of digital services</span>, designed to offer digital solutions to businesses, entrepreneurs, or individuals.<br><br><span>Websites:</span> Creation and development of <span>intuitive</span> and <span>optimized</span> websites to meet the specific needs of each client.<br><br><span>Online Stores:</span> Implementation of <span>complete</span> e-commerce platforms, with all the <span>necessary functionalities</span> to sell products and services online in an <span>efficient and secure</span> manner.<br><br><span>Management Systems:</span> Development of management systems tailored to the <span>needs</span> of each business, whether in <span>web format</span> or as <span>desktop applications</span>, enabling <span>efficient and accessible</span> management from any device.<br><br>This website not only <span>facilitates</span> the acquisition of these services but also offers an <span>intuitive</span> user <span>experience</span>, with an <span>attractive design</span> and a <span>simplified purchase process</span>.';
        document.querySelector('.contacto .nombre').textContent = 'CONTACT';


        
   
    } else {
        lenguajebtn.textContent = 'EN';

        document.getElementById('sobremibtn').textContent = 'SOBRE MI';
        document.getElementById('trabajosbtn').textContent = 'TRABAJOS';
        document.getElementById('contactobtn').textContent = 'CONTACTO';
        document.querySelector('.inicio h2').innerHTML = 'Eficiencia y creatividad <br> <span>en cada línea </span><br> de código';
        document.querySelector('.sobremi p').textContent = 'SOBRE MI';
        document.querySelector('.sobremi .desc').innerHTML = 'Estudiante de <span>Ingeneria en Sistema</span> de la <span>ORT</span> Uruguay (3er semestre). Previamente realice un curso de <span>desarrollo web</span> y <span>Bases de datos</span> (PHP - MYSQL).';
        document.getElementById('espacio').textContent = 'EXPERIENCIA';
        document.querySelector('.izdadcha1').innerHTML = '<span>✮</span>  Desarrollo <span>WEB</span>';
        document.querySelector('.izdadcha2').innerHTML = '<span>✮</span>  Desarrollo de <span>APLICACIONES</span>';
        document.querySelector('.izdadcha3').innerHTML = '<span>✮</span>  Automatizacion y logistica con <span>SISTEMAS</span> a <span>MEDIDA</span>';
        document.querySelector('.izdadcha4').innerHTML = '<span>✮</span>  Diseño de interfaces de <span>GESTION</span>';
        document.querySelector('.izdadcha5').innerHTML = '<span>✮</span>  Administracion y manejo de <span>BASE</span> de <span>DATOS</span>';
        document.querySelector('.atributos .nombre').textContent = 'ATRIBUTOS';
        document.querySelector('.atributos .tipo').textContent = 'INTERFAZ GRAFICA';
        document.querySelector('.atributos .tipo2').textContent = 'LENGUAJES';
        document.querySelector('.trabajos p').textContent = 'TRABAJOS';
        document.querySelector('.caja1 .titulo').textContent = 'AUTOMOTORA';
        document.querySelector('.caja1 .desc').innerHTML = 'Desarrollamos una <span>página web</span> integral para una automotora, diseñada para ofrecer una <span>experiencia de usuario completa</span> y <span>personalizada</span>. La plataforma incluye un <span>sistema completo de cuentas y perfiles</span>, permitiendo a los usuarios puedan <span>editar</span> todos los campos de su información personal de manera <span>sencilla y segura.</span><br><br>Además, hemos implementado un <span>carrito</span> de compras versátil que permite a los clientes realizar <span>reservas</span>, <span>alquilar</span> y <span>comprar</span> vehículos en línea, con un proceso de pago intuitivo y seguro.<br><br>Para la <span>gestión interna</span>, hemos desarrollado un <span>backend</span> avanzado que centraliza todas las operaciones. Este sistema incluye un <span>control de usuarios y permisos</span>, lo que permite a la administración <span>agregar empleados</span> con distintos <span>niveles de acceso</span> según sus <span>roles</span>. Las opciones de administración disponibles incluyen la <span>gestión de usuarios</span>, <span>inventario de vehículos</span>, <span>especificaciones detalladas de cada automóvil</span>, <span>compras</span>, <span>reservas</span>, y otras funciones críticas para el negocio.</p>';
        document.querySelector('.caja1 #desc2').innerHTML = 'Desarrollamos una <span>página web</span> especializada en la <span>venta de servicios digitales</span>, diseñada para ofrecer soluciones digitales a empresas, emprendedores o particulares. <br><br><span>Páginas Web:</span> Creación y desarrollo de sitios web <span>intuitivos</span> y <span>optimizados</span> para satisfacer las necesidades específicas de cada cliente. <br><br><span>Tiendas Online:</span> Implementación de comercios electrónicos <span>completos</span>, con todas las <span>funcionalidades necesarias</span> para vender productos y servicios en línea de manera <span>eficiente y segura</span>. <br><br><span>Sistemas de Gestión:</span> Desarrollo de sistemas de gestión adaptados a las <span>necesidades</span> de cada negocio, ya sea en <span>formato web</span> o como <span>aplicaciones de escritorio</span>, permitiendo una administración <span>eficiente y accesible</span> desde cualquier dispositivo. <br><br>Esta página web no solo <span>facilita</span> la adquisición de estos servicios, sino que también ofrece una <span>experiencia</span> de usuario <span>intuitiva</span>, con un <span>diseño atractivo</span> y un <span>proceso de compra simplificado</span></p>';
        document.querySelector('.contacto p').textContent = 'CONTACTO';
    }
}

document.getElementById("btnAutomotora").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("alertaAutomotora").classList.remove("d-none");
});

function cerrarAlerta() {
    document.getElementById("alertaAutomotora").classList.add("d-none");
}