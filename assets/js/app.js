window.addEventListener('load',function(){
  var promo4 = document.getElementsByClassName('promo-4');
  var promo5 = document.getElementsByClassName('promo-5');
  var promo6 = document.getElementsByClassName('promo-6');
  var seleccion = document.getElementById('select-coders');

  function muestra(param){
    for(var i = 0; i < param.length; i++){
      param[i].style.display = "inline-block";
    }
  }

  function oculta(param){
    for(var i = 0; i < param.length; i++){
      param[i].style.display = "none";
    }
  }

  seleccion.onchange= function(){

    if(seleccion.value == "promo-4"){
     muestra(promo4);
     oculta(promo5);
     oculta(promo6);
    }
    if(seleccion.value == "promo-5"){
      muestra(promo5);
      oculta(promo4);
      oculta(promo6)
    }
    if(seleccion.value == "promo-6"){
      muestra(promo6);
      oculta(promo5);
      oculta(promo4)
    }
    if(seleccion.value == "todas"){
      muestra(promo4);
      muestra(promo5);
      muestra(promo6);
    }
  }

})
