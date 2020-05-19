var popup = document.getElementById('popup');

var popupImg = document.getElementById("img-popup");


$(window).on('load',function(){
    popup.style.display = "block";
    if(popupImg.getAttribute("with-img-mobile") !== null  && $(this).width() <= 800  ){
      fileName =  popupImg.src.split('.').slice(0, -1).join('.')
      extension = popupImg.src.slice(-4)
      popupImg.src = fileName+"-mobile"+extension
    }
})

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  $('#popup').fadeOut(150);
}
popup.onclick = function(){
  $('#popup').fadeOut(150);
};