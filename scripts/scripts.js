 // jQuery hide()/show() example with a switch statement

$(document).ready(function() {
  $(".form-group").hide();

  $(function(){
    $("#modal-launcher, #modal-background, #modal-close").click(function () {
      $("#modal-content,#modal-background").toggleClass("active");
    });
  });

  $( ".myButton" ).click(function() {
    // if ( $(this).parent().children(".form-group").is(':visible') ) {
      $(this).parent().children(".form-group").toggle();


 //$('#modal-content').click(function(){
   //if (madrid.checked) {
     //$(this.).show("h2")
  // } else {
    // $(this.).show("h4")
   //}
 //});



 $("#checkButton").click(function() {

   var selected = $('input[name=number0]:checked').val();

   if (selected == "Madrid") {
     // if they picked crrect answer, in this case, zebra


     $("#modal-launcher, #modal-background, #modal-close").show();
   } else {
     // if they picked nything not zebra
     $("#modal-launcher, #modal-background, #modal-close").show();
   }

 });



  });



}); // end document ready
