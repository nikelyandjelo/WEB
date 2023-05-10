$(function() {
  $(".accordion").accordion();
});

$(function() {
  $(".dropdown-toggle").click(function() {
  $(this).toggleClass("active");
  $(this).next(".dropdown-menu").slideToggle("fast");
     return false;
 });
});
