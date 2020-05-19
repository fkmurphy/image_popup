// Get the modal
var popup = document.getElementById('popup');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var popupImg = document.getElementById("img-popup");


$(window).on('load',function(){
    popup.style.display = "block";
    if(popupImg.getAttribute("with-img-mobile") !== null  && $(this).width() <= 800  ){
      fileName =  popupImg.src.split('.').slice(0, -1).join('.')
      extension = popupImg.src.slice(-4)
      console.log("es mobil")
      popupImg.src = fileName+"-mobile"+extension
    }
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  $('#popup').fadeOut(150);
}
popup.onclick = function(){
  //$mod.fadeOut(150);
  $('#popup').fadeOut(150);
};