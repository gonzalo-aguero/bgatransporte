//PORTADA
$('#div-imgCarrousel > div').css('display','inline-block');
//SE MUESTRAN LOS SERVICIOS AL CARGAR
$('#h1-seccion').css('display','block')
    $(document).ready(()=>{
        setTimeout(()=>{
            mostrarServicios();
        },4000);
    })
    
var activador = true;
function mostrarServicios(){
    if(activador==true){
    activador = false;
    $('.div1-seccion').animate({
        left: "0"
    },1000);
    $('.div-seccion').animate({
        right: "0"
    },1500);
    }
}





//Mostrar sección clientes
$(document).on("scroll", function(){
    if($('body, html').scrollTop() > $('.seccionClientes').offset().top-450){
        $('.seccionClientes > h1').css('display','block')
        $('.seccionClientes > ul').css('display','block')
    } 
})





//Deslizar textos sección "Nosotros"
$(document).on("scroll", function(){
    if($('body, html').scrollTop() > $('.seccion2').offset().top-350){ 
        $('.p1seccion2').animate({
            left: 0,
            opacity: "100%"
        },1000);
        setTimeout(()=>{
            $('.p2seccion2').animate({
                left: 0,
                opacity: "100%"
            },1000);
        },500);
    }
});





//Animacion de btnContactar y aparecer seccionClientes
var ON_btnContactar = true;
$(document).on("scroll", function(){
    var pos = document.getElementById('btnContactar').getBoundingClientRect().top;
    if(pos < 700 && ON_btnContactar == true){
        ON_btnContactar = false;
        document.getElementById('btnContactar').classList.add('animate__animated', 'animate__fadeInLeftBig');
    }
});
//DEPLEGUE DE FORMULARIO DE CONTACTO (botón "CONTACTAR")
$('#btnContactar').click(()=>{
    $('.formContactoSeccion').css('display','block');
    $('body, html').animate({
        scrollTop: ($('.formContactoSeccion').position().top)+"px"
    },1000);
    $('.formContactoSeccion').animate({
        left: 0
    },1000);
});






var infoSeccion = $('.seccion1');
var selector = null;
//.txtTransporte, .txtMudanzas, .txtGuardamuebles, .formPresupuesto
//SE MUESTRA INFO TRANSPORTE
$('#transporte').click(()=>{
    if( selector == "mudanzas" || selector == "guardamuebles" || selector == "presupuesto"){
        $('.txtMudanzas').slideUp();
        $('.txtGuardamuebles').slideUp();
        $('.formPresupuesto').slideUp();
        setTimeout(()=>{
            $('body, html').animate({
                scrollTop: (infoSeccion.position().top-50)+"px"
            },1000);
            $('.txtTransporte').slideDown();
            selector = "transporte";
        },400);
    }else if( selector == null){
        $('.txtTransporte').slideDown();
        selector = "transporte";
        $('body, html').animate({
            scrollTop: (infoSeccion.position().top-50)+"px"
        },1000);
    }else if( selector == "transporte"){
        $('.txtTransporte').slideUp();
        selector = null;
    }
});
//SE MUESTRA INFO MUDANZAS
$('#mudanzas').click(()=>{
    if( selector == "transporte" || selector == "guardamuebles" || selector == "presupuesto"){
        
        $('.txtTransporte').slideUp();
        $('.txtGuardamuebles').slideUp();
        $('.formPresupuesto').slideUp();
        setTimeout(()=>{
            $('.txtMudanzas').slideDown();
            $('body, html').animate({
                scrollTop: (infoSeccion.position().top-50)+"px"
            },1000);
            selector = "mudanzas";
        },400);
    }else if( selector == null){
        $('.txtMudanzas').slideDown();
        selector = "mudanzas";
        $('body, html').animate({
            scrollTop: (infoSeccion.position().top-50)+"px"
        },1000);
    }else if( selector == "mudanzas"){
        $('.txtMudanzas').slideUp();
        selector = null;
    }
});
//SE MUESTRA INFO GUARDAMUEBLES
$('#guardamuebles').click(()=>{
    if( selector == "mudanzas" || selector == "transporte" || selector == "presupuesto"){
        $('.txtTransporte').slideUp();
        $('.txtMudanzas').slideUp();
        $('.formPresupuesto').slideUp();
        setTimeout(()=>{
            $('.txtGuardamuebles').slideDown();
            $('body, html').animate({
                scrollTop: (infoSeccion.position().top-50)+"px"
            },1000);
            selector = "guardamuebles";
        },400);
    }else if( selector == null){
        $('.txtGuardamuebles').slideDown();
        selector = "guardamuebles";
        $('body, html').animate({
            scrollTop: (infoSeccion.position().top-50)+"px"
        },1000);
    }else if( selector == "guardamuebles"){
        $('.txtGuardamuebles').slideUp();
        selector = null;
    }
});
//SE MUESTRA EL FORMULARIO PARA PEDIR PRESUPUESTO
$('#presupuesto').click(()=>{
    if( selector == "mudanzas" || selector == "transporte" || selector == "guardamuebles"){
        $('.txtTransporte').slideUp();
        $('.txtMudanzas').slideUp();
        $('.txtGuardamuebles').slideUp();
        setTimeout(()=>{
            $('.formPresupuesto').slideDown();
            $('body, html').animate({
                scrollTop: (infoSeccion.position().top-50)+"px"
            },1000);
            selector = "presupuesto";
        },400);
    }else if( selector == null){
        $('.formPresupuesto').slideDown();
        selector = "presupuesto";
        $('body, html').animate({
            scrollTop: (infoSeccion.position().top-50)+"px"
        },1000);
    }else if( selector == "presupuesto"){
        $('.formPresupuesto').slideUp();
        selector = null;
    }
});
//end of file