document.getElementById('ComparadorForm').addEventListener('submit',
    function(event){
        event.preventDefault();
        let a = parseFloat( document.getElementById('a').value);
        let b = parseFloat( document.getElementById('b').value);
        let resultado;

        if( a === b){
            resultado = `A y B son iguales: ${a} = ${b}`;
        }else if( a > b){
            resultado = `A es mayor que B: ${a} > ${b}`;
        }else{
            resultado = `A es menor que B: ${a} < ${b}`;
        }
        
        document.getElementById('result').innerText = resultado;
        
        limpiarCampo('a');
        limpiarCampo('b');
    }

);

function limpiarCampo (nombre){
    document.getElementById(nombre).value = "";
}