import cipher from './cipher.js';

let user = document.getElementById('user');
let pswrd = document.getElementById('pswrd');
let btn = document.querySelector('#btn'); //variable, getting button 1 by id
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let image1 = document.getElementById('image1');
let image3 = document.getElementById('image3');
let image2 = document.getElementById('image2');
let image4 = document.getElementById('image4');
let icon = document.querySelector('#eye');
let icon2 = document.querySelector('#eyeslash');
let contrasena = document.querySelector('#pswrd');

icon.addEventListener('click', () => {
    icon2.style.display = '';
    icon.style.display = 'none';
    contrasena.type = "text";
});
icon2.addEventListener('click', () => {
    icon2.style.display = 'none';
    icon.style.display = '';
    contrasena.type = "password";
});

let login = {
    users: ['usuario0','usuario1', 'usuario2', 'usuario3','usuario4'],
    passwords: ['contrasena0','contrasena1', 'contrasena2','contrasena3','contrasena4']
};
console.log(Object.keys(login.users).length);
btn.addEventListener('click', () => { //Acceder //addEventListener(evento, funcion)
    let message = document.getElementById('mensaje');
    for (let i = 0; i < Object.keys(login.users).length; i++) {
        if (user.value == "") {
            message.innerText = 'por favor ingresa tu usuario';
            message.classList.add('error-text');
        } else if (pswrd.value == "") {
            message.innerText = 'por favor ingresa tu contraseña';
            message.classList.add('error-text');
        }else{
            message.innerText = 'el usuario y/o contrasena no son correctos';
            message.classList.add('error-text');
        }
        if (user.value == login.users[i] && pswrd.value == login.passwords[i]) {
            const div = document.getElementById('pag2'); //mostrar pag2 con display
            div.style.display = '';
            const div2 = document.getElementById('root'); //ocultar pag1 con display
            div2.style.display = 'none';
            message.innerText='';
        }
    }
});

btn1.addEventListener('click', () => {  //Codificar
    let string = document.getElementById('text1').value;
    let offset = document.getElementById('move1').value;
    let textCod = cipher.encode(offset, string);
    document.getElementById("textcod").innerText = textCod;
    document.getElementById("textLegend").innerText = " Texto Cifrado";
});

btn2.addEventListener('click', () => { //Decodificar
    let string = document.getElementById('text1').value;
    let offset = document.getElementById('move1').value;
    let textDeCod = cipher.decode(offset, string);
    document.getElementById("textcod").innerText = textDeCod;
    document.getElementById("textLegend").innerText = " Texto Descifrado ";
});

btn5.addEventListener('click', () => { //limpiar datos de codificar y decodificar
    document.getElementById('form2').reset();
    document.getElementById("textLegend").innerText = " Nuevo Texto ";
    document.getElementById("textcod").innerText = "";
})

btn4.addEventListener('click', () => { //Elige otro proyecto
    let pView = document.getElementById('proyects');
    pView.style.display = 'grid';
    const b4 = document.getElementById('b4');
    b4.style.display = 'none';
    const proyect = document.querySelectorAll('figure');
    for (let i = 0; i < proyect.length; i++) {
        proyect[i].style.display = "";
    }
    const texts = document.querySelectorAll('blockquote');
    for (let i = 0; i < texts.length; i++) {
        texts[i].style.display = 'none';
    }
});

btn3.addEventListener('click', () => { //cerrar sesion
    const div2 = document.getElementById('root');
    div2.style.display = '';
    const div = document.getElementById('pag2');
    div.style.display = 'none';
    const b4 = document.getElementById('b4');
    b4.style.display = 'none';
    document.getElementById('form1').reset();
    document.getElementById('form2').reset();
    document.getElementById("textcod").innerText = "";
    let pView = document.getElementById('proyects');
    pView.style.display = 'grid';
    const proyect = document.querySelectorAll('figure'); //usar funcion porque da una lista estatica
    for (let i = 0; i < proyect.length; i++) {
        proyect[i].style.display = "";
    }
    const texts = document.querySelectorAll('blockquote');
    for (let i = 0; i < texts.length; i++) {
        texts[i].style.display = 'none';
    }
    icon2.style.display = 'none';
    icon.style.display = '';
    document.getElementById('mensaje').innerText='';
});

image1.addEventListener('click', () => {
    let pView = document.getElementById('proyects');
    pView.style.display = 'inline';
    const p1Text = document.getElementById('p1Text'); //mostrar texto del proyecto
    p1Text.style.display = '';
    const b4 = document.getElementById('b4');
    b4.style.display = '';
    const proyect2 = document.getElementById('proyect2');
    proyect2.style.display = 'none';
    const proyect3 = document.getElementById('proyect3');
    proyect3.style.display = 'none';
    const proyect4 = document.getElementById('proyect4');
    proyect4.style.display = 'none';
});

image2.addEventListener('click', () => {
    let pView = document.getElementById('proyects');
    pView.style.display = 'inline';
    const p2Text = document.getElementById('p2Text'); //mostrar texto del proyecto
    p2Text.style.display = '';
    const b4 = document.getElementById('b4');
    b4.style.display = '';
    const proyect1 = document.getElementById('proyect1');
    proyect1.style.display = 'none';
    const proyect3 = document.getElementById('proyect3');
    proyect3.style.display = 'none';
    const proyect4 = document.getElementById('proyect4');
    proyect4.style.display = 'none';
});

image3.addEventListener('click', () => {
    let pView = document.getElementById('proyects');
    pView.style.display = 'inline';
    const p3Text = document.getElementById('p3Text'); //mostrar texto del proyecto
    p3Text.style.display = '';
    const b4 = document.getElementById('b4');
    b4.style.display = '';
    const proyect1 = document.getElementById('proyect1');
    proyect1.style.display = 'none';
    const proyect2 = document.getElementById('proyect2');
    proyect2.style.display = 'none';
    const proyect4 = document.getElementById('proyect4');
    proyect4.style.display = 'none';
});

image4.addEventListener('click', () => {
    let pView = document.getElementById('proyects');
    pView.style.display = 'inline';
    const p4Text = document.getElementById('p4Text'); //mostrar texto del proyecto
    p4Text.style.display = '';
    const b4 = document.getElementById('b4');
    b4.style.display = '';
    const proyect1 = document.getElementById('proyect1');
    proyect1.style.display = 'none';
    const proyect2 = document.getElementById('proyect2');
    proyect2.style.display = 'none';
    const proyect3 = document.getElementById('proyect3');
    proyect3.style.display = 'none';
});