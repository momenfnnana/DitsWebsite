window.addEventListener("load", function (e) {
  document.querySelectorAll('a[href^="#"]').forEach((link) =>
    link.addEventListener("click", function (e) {
      console.log(this.getAttribute("href"));
      var id = this.getAttribute("href");
      e.preventDefault();
      if (id.length > 1) {
        scrollTo(id);
      }
    })
  );
});

function scrollTo(id) {
  // target element
  var $id = document.querySelector(id);
  console.log("id: ", $id);
  if ($id.length === 0) {
    return;
  }
  // top position relative to the document
  var pos = $id.offsetTop - (window.outerHeight / 4 - 50);
  window.scrollTo({
    top: pos,
    behavior: 'smooth',
  })
}
