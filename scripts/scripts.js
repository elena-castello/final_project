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
    // } else {
      // $(this).parent().children(".form-group").hide();
    // }

    // switch ($(this).attr("id")) {
    //   case "form-group":
    //     $('#form-group').show();
    //     break;
    //   }




  //change for radio buttons!! not on click
  });



}); // end document ready
