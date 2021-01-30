$(document).ready(function () {

    // función botones ---> Al hacer click, la variable 'a' toma como valor el atributo "value" del .boton respectivo, se añade en el div '.pantalla' con la función .append() y
    //                      se almacena en el input '.salida' que está oculto. (la función .val() obtiene y le da el valor al input .salida)
    $(".boton").click(function (e) { 
        e.preventDefault();
        var a = $(this).attr("value");
        $('.pantalla').append(a);
        $('.salida').val($('.salida').val() + a);   
    });

    // función limpiar ---> Al hacer click en el boton-limpiar, el valor del input oculto desaparece al igual que el contenido del div .pantalla
    $(".boton-limpiar").click(function () { 
        $('.salida').val("");                              // diferencias entre .append y .html
        $('.pantalla').html("");                           //.append() añade contenido  // .html() cambia el contenido
    });

    // función igual ---> Al hacer click en boton-igual, el valor .val almacenado en el input '.salida' se evalúa con la función eval(), como los datos almacenados son
    //                    sólo caracteres numéricos, se efectúa la operación aritmética, de lo contrario devolvería un string.  Este valor se asigna en el div .pantalla con 
    //                    la función .html que cambia el contenido existente por el que le da eval()
    $(".boton-igual").click(function () {
        $('.salida').val(eval($('.salida').val()));                 
        $('.salida').val(eval($('.salida').val()));
        $('.pantalla').html(eval($('.salida').val()));              
    });

    // función raiz cuadrada ---> al hacer click en el boton-raiz, se asignan dos variables, a la primera, 'numero',se le asigna el valor (value) actual del input .salida, luego,
    //                            en la segunda variable ,'raiz', al valor del input se le asigna la funcion Math.sqrt() que sirve precisamente para sacar la raiz de un número.
    //                            Una vez que tenemos las variables definidas, se elimina cualquier valor anterior del input .salida y el contenido del div .pantalla para que 
    //                            se pueda añadir solamente el valor de la raiz en .pantalla y se almacene en el input .salida /si no hacemos el paso de 'borrar' se juntarian
    //                            todos los datos anteriores y de la raiz en la pantalla y en los valores del input/  
    $('.boton-raiz').click(function (e) { 
        e.preventDefault();
        var numero = $('.salida').attr("value");
        var raiz = Math.sqrt(numero);
        $('.pantalla').html("");
        $('.salida').val("");
        $('.pantalla').append(raiz.toFixed(4));     // toFixed() acorta los decimales a la cantidad especificada.
        $('.salida').val($('.salida').val() + raiz);
    });

    // función potencia al cuadrado --->  Mismo sistema que se utilizó en la función raiz, solo que aquí se utilizó  -- Math.pow(base, exponente) -- 
    //                                                                                                 función para devolver la base elevada al exponente
    $('.boton-potencia').click(function (e) { 
        e.preventDefault();
        var x = $('.salida').attr("value");
        var potencia = Math.pow(x, 2);
        $('.pantalla').html("");
        $('.salida').val("");
        $('.pantalla').append(potencia.toFixed(4));    // toFixed() acorta los decimales a la cantidad especificada.
        $('.salida').val($('.salida').val() + potencia); 
    });

    // función botón +-  --->  Mismo sistema que los anteriores, solo que aquí una vez obtenido el valor actual del input .salida (y), en la segunda variable se le asigna un 
    //                         valor distinto, y = -y (si es positivo cambia a negativo / si es negativo cambia a positivo)
    $('.boton-masmenos').click(function (e) { 
        e.preventDefault();
        var y = $('.salida').attr("value");
        var negativo = (y = -y);
        $('.pantalla').html("");
        $('.salida').val("");
        $('.pantalla').append(negativo);
        $('.salida').val($('.salida').val() + negativo); 
    });
        

});