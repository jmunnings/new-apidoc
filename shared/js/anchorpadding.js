$("body").on("click", "a", function() {
  fromTop = 150;
  href = $(this).attr("href");

  // If href is set, points to an Anchor, and the Anchor is not simply #
  if(href && href.indexOf("#") != -1 && href.indexOf("#") != href.length - 1) {
    href = href.substring(href.indexOf("#"));
    if($(href).length > 0) { // If element exists
      $('html, body').animate({scrollTop: $(href).offset().top - fromTop}, 400);
      return false;
    }
  }
}); 