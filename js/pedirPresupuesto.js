/**
 * HHHWAD8812KKllawd9
 */
$(document).ready(function(){
    $('#btnPedirPresupuesto').click(function(){
        $('.cargandoGif').css('display','inline-block');
        var name = $('#name').val();
        var email = $('#email').val();
        var telefono = $('#telefono').val();
        var origen = $('#origen').val();
        var destino = $('#destino').val();
        var tipoDestino = $('input:radio[name=tipoDestino]:checked').val();
        var planta = $('input:radio[name=planta]:checked').val();
        var descripcion = $('#descripcion').val();
        var cantBultos = $('#cantBultos').val();

        $.ajax({
            type: "POST",
            url: "php/pedirPresupuestoExe.php",
            data: { name: name,
                    email: email, 
                    telefono: telefono,
                    origen: origen,
                    destino: destino,
                    tipoDestino: tipoDestino,
                    planta: planta,
                    descripcion: descripcion,
                    cantBultos: cantBultos
                },
            success: function (response){
                if(response==1){
                    $('.avisoRojo').css('display','none');
                    $('.cargandoGif').css('display','none');
                    alert('Formulario enviado exitosamente!\nTe responderemos lo antes posible.');
                }else if(response == 'error:incomplete'){
                    $('.cargandoGif').css('display','none');
                    $('.avisoRojo').css('display','inline-block');
                    $('body, html').animate({
                        scrollTop: (infoSeccion.position().top-50)+"px"
                    },1000);
                }else {
                    $('.avisoRojo').css('display','none');
                    $('.cargandoGif').css('display','none');
                    alert('Error al enviar el formulario');
                }
            }
        });
        return false;
    });

});