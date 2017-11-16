$(document).ready(function(){
  var match = [];
  var selection = []
    $("img").hide();
    $(".card").on("click", function() {
      $(this).children().show();
      id = $(this).attr("id");
      update(match, selection)

    function update(match, selection) {
      if (selection.length === 2){
          cardComparison(match, selection)
    }
}
