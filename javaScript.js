a = console.log("Hola")

   

function Sumar()
{
    console.log("Hola Felipe")

    
    
    //n1.value = "algunaCosa";

    //var a = parseInt(n1.value);
    //var b = parseInt(n2.value);
    //var resultado = parseInt(total.value);
    /*var resultado = a + b;
    result = resultado.toString;

    total.log();

    console.log(resultado);
*/
}




function Sumar()
{
    
    var num1 = parseInt(document.getElementById('num1').value);
    

    var num2 = parseInt(document.getElementById('num2').value);

    
    var Etiquetaresult = document.getElementById("result");

    var result;
    
    
    result = num1 + num2;

    //alert("El resultado es: "+result);
    console.log("El result es: "+result);
    Etiquetaresult.value = result;

    if(Etiquetaresult.value == 5)
    {
        alert("Ganaste!!!")
    }

}

function Resta()
{
    var num1 = parseInt(document.getElementById("num1").value);

    var num2 = parseInt(document.getElementById("num2").value)

    var Etiquetaresult = document.getElementById("result")

    var result;

    result = num1 - num2;

    Etiquetaresult.value = result;

    if(Etiquetaresult.value == 5)
    {
        alert("Ganaste!!!")
    }

}



function Multiplicacion()
{

    var num1 = parseInt(document.getElementById('num1').value);
    

    var num2 = parseInt(document.getElementById('num2').value);

    
    var Etiquetaresult = document.getElementById("result");

    var result;

    result = num1 * num2
    Etiquetaresult.value = result;


    if(Etiquetaresult.value == 5)
    {
        alert("Ganaste!!!")
    }

}

function Division()
{

    var num1 = parseInt(document.getElementById("num1").value);

    var num2 = parseInt(document.getElementById("num2").value);

    var Etiquetaresult = document.getElementById("result");

    var result;

    result = num1 / num2;

    Etiquetaresult.value = result;


    if(Etiquetaresult.value >= 1 && Etiquetaresult.value <= 10)
    {
        alert("Ganaste!!!")
    }

}


function iteraction()
{
    
    var MostrarIteracion = parseInt(document.getElementById("MostrarIteracion").value);
    var iteracion = document.getElementById("iterador");
    var botonIterar = parseInt(document.getElementById("iterar"))

    var iterar = parseInt(iteracion.value);

    for (var i = 1; i <= iterar; i++){

        botonIterar.value = i;

        console.log(i)

        alert("Aqui están tus alertas HP: "+i);

        if(i == iterar)
        {
        alert("Adios!!!")
        }
    }

}

var x = Boolean(true);

function cliquea()
{

    
    alert("Bienvenido al mejor sitio de la web!!!");
    

}



// $(function(){
//     var p = $('.price-cash');
//     var c = p.children();
//     p.text('NUEVO PRECIO: ');
//     p.append(c);
//   });



function regresar_Correo()
{
    window.location.href = "Marquesina.html";
}

function regresar_Projects()
{
    window.location.href = "Marquesina.html";
}