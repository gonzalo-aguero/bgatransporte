var operationTxt = '';
function colocarTextos(i,response){
    $('#txt'+i+'').html(response);
}
function cargarTextos(idETxt){
    operationTxt = 'load';
    $.ajax({
        type: "POST",
        url: "php/cargarTextos.php",
        data: { operation: operationTxt, idETxt: idETxt },
        success: function (response){
            if(response == 'noConnection'){
                console.log('Lo siento, no se ha podido conectar a la base de datos. Por favor, comuníquese con el propietario del sitio.');
            }else{
                colocarTextos(idETxt,response);
                //console.log("Textos cargados: \n"+response);
            }
        }
    });
}
function contarTextos(){
    var cantRegistros;
    //Se cuentan los registros
    operationTxt = 'contar';
    $.ajax({
        type: "POST",
        url: "php/cargarTextos.php",
        data: { operation: operationTxt },
        success: function (response){
            if(response == 'noConnection'){
                console.log('Lo siento, no se ha podido conectar a la base de datos. Por favor, comuníquese con el propietario del sitio.');
            }else{
                cantRegistros = (response);
                for(i=1;i<=cantRegistros;i++){
                    cargarTextos(i);
                }
                console.log("Textos contados: "+response);
            }
        }
    });
}
$(document).ready(()=>{
    contarTextos();
})