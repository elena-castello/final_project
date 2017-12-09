// jQuery hide()/show() example with a switch statement

$(document).ready(function () {
  $(".form-group").hide();

//  $(function(){
//    $("#modal-launcher, #modal-background, #modal-close").click(function () {
//      $("#modal-content,#modal-background").toggleClass("active");
//    });
//  });

  $( ".myButton" ).click(function() {
    // if ( $(this).parent().children(".form-group").is(':visible') ) {
      $(this).parent().children(".form-group").toggle();
  });

 //$('#modal-content').click(function(){
   //if (madrid.checked) {
     //$(this.).show("h2")
  // } else {
    // $(this.).show("h4")
   //}
 //});



 $(".checkButton").click(function() {

   var selected = $('input[name=number0]:checked').val();

   if (selected == "Right") {
     $(this).parent().children("#modal-content").addClass("active");
     $(this).parent().children("#modal-content2").removeClass("active");
   } else {
     $(this).parent().children("#modal-content").removeClass("active");
     $(this).parent().children("#modal-content2").addClass("active");
   }

 });

 $(".myButton").click(function() {
     $(this).parent().removeClass("active");
 });


}); // end document ready
