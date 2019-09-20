console.log('\'Allo \'Allo!');

// Page Scroll transition effect when clilcking menu item
$('.page-scroll').click(function() {
var sectionTo = $(this).attr('href');
$('html, body').animate({
 scrollTop: $(sectionTo).offset().top
}, 800);
});


// $('.box').on('tap', function(e){
//   var box = $(this);
//   box.show('. overlay-effect');
//   e.preventDefault();
//   console.log('tapping the box');
// })

// document.addEventListener("touchstart", function() {}, true);
