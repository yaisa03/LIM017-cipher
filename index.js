import cipher from './cipher.js';

const user = document.getElementById('user');
const pswrd = document.getElementById('pswrd');
const btn = document.querySelector('#btn'); //variable, getting button 1 by id
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const image1 = document.getElementById('image1');
const image3 = document.getElementById('image3');
const image2 = document.getElementById('image2');
const image4 = document.getElementById('image4');
const icon = document.querySelector('#eye');
const icon2 = document.querySelector('#eyeslash');
const password2 = document.querySelector('#pswrd');

icon.addEventListener('click', () => {
    icon2.style.display = '';
    icon.style.display = 'none';
    password2.type = 'text';
});

icon2.addEventListener('click', () => {
    icon2.style.display = 'none';
    icon.style.display = '';
    password2.type = 'password';
});

let login = {
    users: ['usuario0','usuario1', 'usuario2', 'usuario3','usuario4'],
    passwords: ['contrasena0','contrasena1', 'contrasena2','contrasena3','contrasena4']
};
//console.log(Object.keys(login.users).length); //ver cuantos ele
btn.addEventListener('click', () => { //Acceder //addEventListener(evento, funcion)
    const message = document.getElementById('mensaje');
    for (let i = 0; i < Object.keys(login.users).length; i++) {
        if (user.value == '') {
            message.innerText = 'por favor ingresa tu usuario';
            message.classList.add('error-text');
        } else if (pswrd.value == '') {
            message.innerText = 'por favor ingresa tu contraseña';
            message.classList.add('error-text');
        } else {
            message.innerText = 'el usuario y/o contraseña son incorrectos';
            message.classList.add('error-text');
        }
        if (user.value == login.users[i] && pswrd.value == login.passwords[i]) {
            const div = document.getElementById('pag2'); //mostrar pag2 con display
            div.style.display = '';
            const div2 = document.getElementById('pag1'); //ocultar pag1 con display
            div2.style.display = 'none';
            message.innerText='';
        }
    }
});

btn1.addEventListener('click', () => {  //Codificar
    const string = document.getElementById('text').value;
    const offset = document.getElementById('offset').value;
    const textCod = cipher.encode(offset, string);
    document.getElementById('textcod').innerText = textCod;
    document.getElementById('textLegend').innerText = ' Texto Cifrado';
});

btn2.addEventListener('click', () => { //Decodificar
    const string = document.getElementById('text').value; 
    const offset = document.getElementById('offset').value;
    const textDeCod = cipher.decode(offset, string);
    document.getElementById('textcod').innerText = textDeCod;
    document.getElementById('textLegend').innerText = ' Texto Descifrado ';
});

btn3.addEventListener('click', () => { //cerrar sesion
    const div2 = document.getElementById('pag1');
    div2.style.display = '';
    const div = document.getElementById('pag2');
    div.style.display = 'none';
    const button4 = document.getElementById('button4');
    button4.style.display = 'none';
    document.getElementById('form1').reset();
    document.getElementById('form2').reset();
    document.getElementById('textcod').innerText = '';
    const proyects = document.getElementById('proyects');
    proyects.style.display = 'grid';
    const proyect = document.querySelectorAll('figure'); //usar funcion porque da una lista estatica
    for (let i = 0; i < proyect.length; i++) {
        proyect[i].style.display = '';
    }
    const texts = document.querySelectorAll('blockquote');
    for (let i = 0; i < texts.length; i++) {
        texts[i].style.display = 'none';
    }
    icon2.style.display = 'none';
    icon.style.display = '';
    document.getElementById('mensaje').innerText='';
});

btn4.addEventListener('click', () => { //Elige otro proyecto
    const proyects = document.getElementById('proyects');
    proyects.style.display = 'grid';
    const button4 = document.getElementById('button4');
    button4.style.display = 'none';
    const proyect = document.querySelectorAll('figure');
    for (let i = 0; i < proyect.length; i++) {
        proyect[i].style.display = '';
    }
    const texts = document.querySelectorAll('blockquote');
    for (let i = 0; i < texts.length; i++) {
        texts[i].style.display = 'none';
    }
});

btn5.addEventListener('click', () => { //limpiar datos de codificar y decodificar
    document.getElementById('form2').reset();
    document.getElementById('textLegend').innerText = ' Nuevo Texto ';
    document.getElementById('textcod').innerText = '';
});

image1.addEventListener('click', () => {
    const proyects = document.getElementById('proyects');
    proyects.style.display = 'inline';
    const proyect1text = document.getElementById('proyect1text'); //mostrar texto del proyecto
    proyect1text.style.display = '';
    const button4 = document.getElementById('button4'); //mostrar boton "elige otro proyecto"
    button4.style.display = '';
    const proyect2 = document.getElementById('proyect2'); //ocultar proyectos no selecciondos
    proyect2.style.display = 'none';
    const proyect3 = document.getElementById('proyect3');
    proyect3.style.display = 'none';
    const proyect4 = document.getElementById('proyect4');
    proyect4.style.display = 'none';
});

image2.addEventListener('click', () => {
    const proyects = document.getElementById('proyects');
    proyects.style.display = 'inline';
    const proyect2text = document.getElementById('proyect2text'); //mostrar texto del proyecto
    proyect2text.style.display = '';
    const button4 = document.getElementById('button4');
    button4.style.display = '';
    const proyect1 = document.getElementById('proyect1');
    proyect1.style.display = 'none';
    const proyect3 = document.getElementById('proyect3');
    proyect3.style.display = 'none';
    const proyect4 = document.getElementById('proyect4');
    proyect4.style.display = 'none';
});

image3.addEventListener('click', () => {
    const proyects = document.getElementById('proyects');
    proyects.style.display = 'inline';
    const proyect3text = document.getElementById('proyect3text'); //mostrar texto del proyecto
    proyect3text.style.display = '';
    const button4 = document.getElementById('button4');
    button4.style.display = '';
    const proyect1 = document.getElementById('proyect1');
    proyect1.style.display = 'none';
    const proyect2 = document.getElementById('proyect2');
    proyect2.style.display = 'none';
    const proyect4 = document.getElementById('proyect4');
    proyect4.style.display = 'none';
});

image4.addEventListener('click', () => {
    const proyects = document.getElementById('proyects');
    proyects.style.display = 'inline';
    const proyect4text = document.getElementById('proyect4text'); //mostrar texto del proyecto
    proyect4text.style.display = '';
    const button4 = document.getElementById('button4');
    button4.style.display = '';
    const proyect1 = document.getElementById('proyect1');
    proyect1.style.display = 'none';
    const proyect2 = document.getElementById('proyect2');
    proyect2.style.display = 'none';
    const proyect3 = document.getElementById('proyect3');
    proyect3.style.display = 'none';
});