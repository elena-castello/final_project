// jQuery hide()/show() example with a switch statement

$(document).ready(function() {


  // function to hide all divs
  function hideAll() {
    $('#SigoName').hide();
    $('#MiGenteName').hide();
    $('#SafariName').hide();
    $('#GinzaName').hide();
  }

  // run that function right away
  hideAll();

  // when any animal is clicked, make the suitable div appear
  $('.cover').click(function() {
    hideAll();

    // here is a switch statement - this was in Codecademy
    // "Control Flow" lesson 7


  $("button").click(function() {
    $('#Jfact').slideToggle();
});
