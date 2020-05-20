var popup = document.getElementById('popup');

var popupImg =$('#img-popup')

   
$(document).ready(function(){
  if(popupImg.attr("with-img-mobile") !== null  && $(this).width() <= 800  ){
    fileName =  popupImg.attr('src').split('.').slice(0, -1).join('.')
    extension = popupImg.attr('src').slice(-4)
    console.log("es mobil")
    popupImg.attr('src', fileName+"-mobile"+extension) 
  } 
  popup.style.display = "block";

})

$(document).load(function(){
})

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  $('#popup').fadeOut(150);
}
popup.onclick = function(){
  $('#popup').fadeOut(150);
};