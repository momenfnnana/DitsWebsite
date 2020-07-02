document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener("click", function (e) {
    var id = $(this).attr('href');
    e.preventDefault();
    if(id.length>1)
        scrollTo(id);
}))
$(document).on('click', 'a[href^="#"]', function (e) {
    // target element id
    var id = $(this).attr('href');
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    if(id.length>1)
        scrollTo(id);
});
$(document).ready(e=>{
    let hash = window.location.hash;
    console.log(hash);
    setTimeout(() => {
        scrollTo(hash);
    }, 200);
});
function scrollTo(id) {
     // target element
    var $id = document.querySelectorAll(id);
    if ($id.length === 0) {
        return;
    }
    // prevent standard hash navigation (avoid blinking in IE)
    // e.preventDefault();
    // top position relative to the document
    var pos = $id.offset().top - (window.outerHeight/2 - 50);
    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
}