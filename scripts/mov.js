// INICIO BEBOUNCE
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

//VARIÁVEIS
const targetEmpresa = document.querySelectorAll('.empresa-article');
const targetPortLeft = document.querySelectorAll('.blocoLeft');
const targetPortRight = document.querySelectorAll('.blocoRight');
const targetClientUp = document.querySelectorAll('.bloco-clientes')
const animacaoFadeInLeft = 'fadeInLeft';
const animacaoFadeInRight = 'fadeInRight';
const animacaoFadeInUp = 'fadeInUp';
//Pegando Elemento do menu
const $menu = document.querySelector('.nav-Bar');


//FUNÇÃO DE ANIMAÇÃO DE SCROLL

//GATILHO ANIMACAO SUBINDO
function animeScrollUP(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 0.75));
    targetEmpresa.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animacaoFadeInUp);
        }else{
            element.classList.remove(animacaoFadeInUp);
        }
    })
}

animeScrollUP(); 

if(targetEmpresa.length) {
    window.addEventListener('scroll', function() {
        animeScrollUP();
    });
}
//FIM ANIMACAO SUBINDO

//GATILHO ANIMACAO SUBINDO
function animeScrollUP2(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 0.75));
    targetClientUp.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animacaoFadeInUp);
        }else{
            element.classList.remove(animacaoFadeInUp);
        }
    })
}

animeScrollUP2(); 

if(targetClientUp.length) {
    window.addEventListener('scroll', function() {
        animeScrollUP2();
    });
}
//FIM ANIMACAO SUBINDO


//GATILHO ANIMACAO ESQUERDA
function animeScrollLeft(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 0.75));
    targetPortLeft.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animacaoFadeInLeft);
        }else{
            element.classList.remove(animacaoFadeInLeft);
        }
    })
}

animeScrollLeft(); 

if(targetPortLeft.length) {
    window.addEventListener('scroll', function() {
        animeScrollLeft();
    });
}
//FIM ANIMACAO ESQUERDA

//GATILHO ANIMACAO DIREITA
function animeScrollRight(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 0.75));
    targetPortRight.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animacaoFadeInRight);
        }else{
            element.classList.remove(animacaoFadeInRight);
        }
    })
}

animeScrollLeft(); 

if(targetPortRight.length) {
    window.addEventListener('scroll', function() {
        animeScrollRight();
    });
}
//FIM ANIMACAO DIREITA


//GATILHO ABRIR MENU
const $btnMenuOpen = document.querySelector('.btnOpenMenu');
    
$btnMenuOpen.addEventListener('click', function(){
   $menu.classList.remove('bounceOutRight');
   $menu.classList.add('navOpen');
   $menu.classList.add('bounceInRight');
})
//----------------------------

//GATILHO FECHAR MENU
const $btnMenuClose = document.querySelector('.btnCloseMenu');

$btnMenuClose.addEventListener('click',function(){
    $menu.classList.remove('bounceInRight');
    $menu.classList.add('bounceOutRight');
})
//----------------------------

//FECHAR MENU AO CLICAR NO LINK
const $link1 = document.querySelector('.link1');
const $link2 = document.querySelector('.link2');
const $link3 = document.querySelector('.link3');
const $link4 = document.querySelector('.link4');
const $link5 = document.querySelector('.link5');

$link1.addEventListener('click', function(){
    $menu.classList.remove('bounceInRight');
    $menu.classList.add('bounceOutRight');
})
$link2.addEventListener('click', function(){
    $menu.classList.remove('bounceInRight');
    $menu.classList.add('bounceOutRight');
})
$link3.addEventListener('click', function(){
    $menu.classList.remove('bounceInRight');
    $menu.classList.add('bounceOutRight');
})
$link4.addEventListener('click', function(){
    $menu.classList.remove('bounceInRight');
    $menu.classList.add('bounceOutRight');
})
$link5.addEventListener('click', function(){
    $menu.classList.remove('bounceInRight');
    $menu.classList.add('bounceOutRight');
})
//-----------------------------
