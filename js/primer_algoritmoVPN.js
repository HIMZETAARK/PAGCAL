//******** algoritmo para verificar si es un número primo ********

function salida(){

    var entrada =  document.getElementById("numero").value;
    var contador = 0;
//var entrada = parseInt(prompt("Ingresa el número:")); 
    if(entrada != 1){
//procesando
     for (var a=1 ; a <= entrada ; a++) {
     var resultado= Number. isInteger(entrada / a);      
        if( resultado== true){
           ++contador;
        }
     }
//vericando 
     if (contador<3) {
//resultado
        alert(entrada + "    ES UN NÚMERO PRIMO \n "); 
       alert(" \n PI * "+ entrada + " = " + entrada*Math.PI);
    }else{
        alert(entrada + "  NO ES PRIMO");
    }
}else{alert("1 NO ES PRIMO.");}  

 }
/**RESUMEN:
 * PRIMERO  Se recibe un  número para verificar.
 * SEGUNDO  El número de $entrada lo dividimos  con cada numero del 1-9 O
 *          para saber  si la division es entera o no
 *          la variable $resultado recibirá un valor(true o false).
 * TERCERO si es  verdadero el $contador aumentará +1.
 * CUARTO  Verificaremos  si la varible $contador  es menor a 3( los números primos 
 *          solo  son divisibles por él mismo y la unidad).
 * QUINTO  Se muestra el resulado.*/ 

//Grácias eso es todo.




    
   
