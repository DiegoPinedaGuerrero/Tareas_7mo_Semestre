//Genera el numero a adivinar
let numS=Math.floor(Math.random()*(10-1)+1);

//Pieda al usuario su primer intento y le asigna su numero de intentos iniciales
let numUsuario=parseInt(prompt("Trata de adivinar el numero secreto, ingresa un numero entre el 1 y el 10"));
let vidas = 3;

//Revisa si el numero ingresado por el usuario fue correcto o no
while(numS!== numUsuario && vidas >1){
    vidas --;
    numUsuario = parseInt(prompt("Ese no era, trata de adivinar de nuevo -> Vidas" + vidas));  
}

//Avisa si se gano o se perdio
if(numS === numUsuario){
    console.log("Ganaste");
    alert("Felicidades ganaste!!!");
}else{
    console.log("Perdiste");
    alert("Perdiste, el numero era " + numS);
}