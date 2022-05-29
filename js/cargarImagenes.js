var operation = '';
function colocarImagenes(idEImg,response){
    $('#img'+idEImg+'').html(response);
}
function cargarImagenes(idEImg){
    operation = 'load';
    $.ajax({
        type: "POST",
        url: "php/cargarImagenes.php",
        data: { operation: operation, idEImg: idEImg },
        success: function (response){
            if(response == 'noConnection'){
                console.log('Lo siento, no se ha podido conectar a la base de datos. Por favor, comuníquese con el propietario del sitio.');
            }else{
                colocarImagenes(idEImg,response);
                //console.log("Imágenes cargadas: \n"+response);
            }
        }
    });
}
function contarImagenes(){
    var cantRegistros;
    //Se cuentan los registros
    operation = 'contar';
    $.ajax({
        type: "POST",
        url: "./php/cargarImagenes.php",
        data: { operation: operation },
        success: function (response){
            if(response == 'noConnection'){
                console.log('Lo siento, no se ha podido conectar a la base de datos. Por favor, comuníquese con el propietario del sitio.');
            }else{
                cantRegistros = (response);
                for(i=1;i<=cantRegistros;i++){
                    cargarImagenes(i);
                    console.log("Imágenes contadas: "+response);
                }
            }
        }
    });
}
$(document).ready(()=>{
    contarImagenes()
})