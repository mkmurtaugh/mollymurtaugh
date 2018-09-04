
// dinner button mobile
$(document).ready(function(){


$(".btn_smed_dinner").on("click", function(){
    $(".es_image").slideToggle();
    $(".es_smed").toggleClass('open');
});

// cocktail butotn mobile



$(".btn_smed_drinks").on("click", function(){
    $(".es_image1").slideToggle();
    $(".es_smed").toggleClass('open');
});

// drawsvg desktop
var $svg = $('svg').drawsvg();

$svg.drawsvg('animate');

$(".image-container").mouseover(function () {
  $(this).attr('src', $(this).data("hover"));
}).mouseout(function () {
  $(this).attr('src', $(this).data("src"));
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


// cocktail menu
// Get the modal
var modalC = document.getElementById('myModalC');

// Get the button that opens the modal
var btn = document.getElementById("cocktailBtn");

// Get the <span> element that closes the modal
var spanC = document.getElementsByClassName("closeC")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modalC.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanC.onclick = function() {
    modalC.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal || event.target == modalC) {
        modal.style.display = "none";
        modalC.style.display = "none";
    }
}

})