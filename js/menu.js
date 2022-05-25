/*MENU  DESPLEGABLE*/
    var seeMenu = false;
    $('.botonMenu').click(()=>{
        if( seeMenu == true){
            seeMenu = false;
            $('nav').animate({
                left: "-100%"
            });
        }else if( seeMenu == false ){
            seeMenu = true;
            $('nav').animate({
                left: 0
            });
        }
    });
var fixedMenu = false;
$(document).on("scroll", function(){
    //MENU FIXED
    if($('body, html').scrollTop() > 120 && fixedMenu == false){
        $('header').css("display","none");
        $('header').css("position", "fixed");
        $('header').slideDown();
        $('header').css("opacity", "90%");
        $('header').css("z-index", "5");
        fixedMenu = true;
    }else if($('body, html').scrollTop() < 20){
        $('header').css("position", "relative");
        $('header').css("opacity", "100%");
        fixedMenu = false;
    }
    if($('body, html').scrollTop() > ($( window ).height()/3)){ 
        $('.irArriba').fadeIn(2000);
    }   
});
//boton ir arriba
$('.irArriba').on("click",()=>{
    $('body, html').animate({
        scrollTop: "0px"
    }, 1000);
});
//Animacion scroll hacia secciones
function irInicio(){
    seeMenu = false;
    $('nav').animate({
        left: "-100%"
    });
    $('body, html').animate({
        scrollTop: 0
    }, 1000);
}
function irServicios(){
    var posicionServicios = $('#seccion').offset().top;
    $('body, html').animate({
        scrollTop: posicionServicios
    }, 1000);
    seeMenu = false;
        $('nav').animate({
            left: "-100%"
        });
}
function irContacto(){
    seeMenu = false;
        $('nav').animate({
            left: "-100%"
        });
        $('.formContactoSeccion').css('display','block');
        $('body, html').animate({
            scrollTop: ($('.formContactoSeccion').offset().top-100)+"px"
        },1000);
        $('.formContactoSeccion').animate({
            left: 0
        },1000);
}
function irNosotros(){
    seeMenu = false;
        $('nav').animate({
            left: "-100%"
        });
    var posicionNosotros = $('#seccion2').offset().top;
    $('body, html').animate({
        scrollTop: posicionNosotros-100
    }, 1000);
}
$('#liInicio').click(()=>{
    irInicio();
});
$('#liServicios').click(()=>{
    irServicios();
});
$('#liContacto').click(()=>{
    irContacto();
});
$('#liNosotros').click(()=>{
    irNosotros();
});