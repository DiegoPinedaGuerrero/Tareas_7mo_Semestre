
var productos = [{ nombre: 'Camisa', precio: 300 },{ nombre: 'Pantalón', precio: 500 },{ nombre: 'Zapatos', precio: 800 },{ nombre: 'Sombrero', precio: 200 }];
var carrito =[];
var pagar = 0;

function agregarProducto(index){
    carrito.push(productos[index]);
    pagar = pagar + productos[index].precio;
}
function removerProducto(){
    if(carrito.length === 0){
        alert("No hay nada para quitar del carrito")
    }else{
        let tam = carrito.length;
        pagar = pagar - carrito[tam-1].precio;
        carrito.pop();
    }
    
}

function mostrarCarrito(){
    if( carrito.length === 0){
        alert("El carrito esta vacio")
    }else{
        let mensaje = "Productos en el carrito: \n";

        carrito.forEach((producto,index)=>{
            mensaje += `${index+1}.- ${producto.nombre} $${producto.precio}\n`;
        });
        alert(`${mensaje}
        Total a pagar: $${pagar}`);
    }
}

function mostrarMenu(){
    let opcion;
    
    do{

        opcion = prompt(`
            "Elige una opcion"
            Opciones Diponbles:
                1.- Agregar una camisa al carrito (costo $300)
                2.- Agregar un pantalon al carrito (costo $500)
                3.- Agregar unos zapatos al carrito (costo $800)
                4.- Agregar un sombrero al carrito (costo $200)
                5.- Remover el ultimo articulo agregado
                6.- Ver el carrito
                7.- Pagar
            
            `);
        
        switch(opcion){
            case "1":
                agregarProducto(0);
                break;
            case "2":
                agregarProducto(1);
                break;
            case "3":
                agregarProducto(2);
                break;
            case "4":
                agregarProducto(3);
                break;
            case "5":
                removerProducto();
                break;
            case "6":
                mostrarCarrito();
                break;
            case "7":
                alert("Gracias por su compra");
                break;
            default:
                alert("Opcion no valida. Intenta de nuevo");
            
        }


    }while(opcion !== '7')
}
mostrarMenu();