$(function () {

//design
$(document).ready(function() {
  $('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true
  });

  //methods
  $.fn.fullpage.setAllowScrolling(true);
});
  var pageWidth = $(window).width();
  var cols = 1
  var imgs = [
    "subtodirect",
    "subtwitch",
    "pewdsflix",
    "subreme",
    "discdiepie",
    "gopewds",
    "hope",
    "iwantu",
    "JAN",
    "J",
    "flatavatar"
  ]
  var lastdiv = 0
  $.each(imgs, function( index, value ) {
    $(".wrapper").append('<div class="design align-center col-xs-12 col-md-4"><img id=design_'+value+' src="img/designs/'+value+'.png" width=100%></div>');
  });
  if (pageWidth > 1023) {
    var cols = 4
    $(".design").click(function() {
      source = $(this).find('img').attr('src')
      $(".modal-img").attr('src', source)
      var subtext = source.split("/")[2].split(".")[0]
      $("#img-sub").text(subtext)
      $(".img-modal").css("display", "block")
    })

    $(".img-modal").click(function() {
      $(this).css("display", "none")
    }).children().click(function(e) {
      return false
    })

    $(".img-mclose").click(function() {
      $(this).parent().parent().css("display", "none")
    })
  }
});
