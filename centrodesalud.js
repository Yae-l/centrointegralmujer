document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        document.getElementById(targetID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('consultas').addEventListener('submit', function(event) { 
    event.preventDefault();
    const nombre = document.getElementById('name').value;
    const correo = document.getElementById('email').value;
    const mensaje = document.getElementById('message').value;
    console.log('Nombre:', nombre);
    console.log('Correo Electrónico:', correo);
    console.log('Mensaje:', mensaje);
    alert('¡Gracias por tu consulta, ' + nombre + '! Nos pondremos en contacto contigo pronto.');
    document.getElementById('contactForm').reset();
});

