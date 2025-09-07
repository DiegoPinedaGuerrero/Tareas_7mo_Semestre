let a = parseInt(prompt("Ingrese un numero :"));
let b = parseInt(prompt("Ingrese un numero :"));
let c = parseInt(prompt("Ingrese un numero :"));

//Todos los numeros son iguales
if(a === b && b === c){
    alert("Los tres numeros son iguales.");
} 

//2 numeros son iguales y el otro es diferente
 else{
    if(a === b || a === c || b === c){
        let iguales;
        let diferente;
        if(a === b){
            iguales = a;
            diferente = c;
        }else{
            if(a === c){
                iguales = a;
                diferente = b;
            }else{
                iguales = b;
                diferente = a;
            }
        }
        alert("2 numeros fueron iguales: " + iguales + "\nEl diferente es: " + diferente);

        //Identifica quien es mayor si los 2 numeros que coincidieron o el diferente
        let mayor, menor;
        if(iguales > diferente){
            mayor = iguales;
            menor = diferente;
        }else{
            mayor = diferente;
            menor = iguales;
        }
        alert("El mayor es: " + mayor + "\nEl menor es: " + menor);
    }

    //Verifica si todos los numeros son diferentes para encontrar el mayor y el menor
     else{
        let mayor, menor;

        // Mayor
        if(a >= b && a >= c){
            mayor = a;
        }else{
            if(b >= a && b >= c){
                mayor = b;
            }else{
                mayor = c;
            }
        }

        // Menor
        if(a <= b && a <= c){
            menor = a;
        }else{
            if(b <= a && b <= c){
                menor = b;
            }else{
                menor = c;
            }
        }
        alert("Los tres numeros son diferentes.\nEl mayor es: " + mayor + "\nEl menor es: " + menor);
    }
}