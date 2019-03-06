$(function () {

  var pageWidth = $(window).width();
  if (pageWidth > 1023) {
    $(".design").click(function() {
      var target = $(this).data("modal")
      $("#" + target).css("display", "block")
    })

    $(".img-modal").click(function() {
      id = $(this).attr('id')
      $("#"+id).css("display", "none")
    }).children().click(function(e) {
      return false
    })

    $(".img-mclose").click(function() {
      $(this).parent().parent().css("display", "none")
    })
  }
});
