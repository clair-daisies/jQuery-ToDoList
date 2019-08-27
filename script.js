//mark completed ToDo
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//click on X to delete ToDo
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      this.remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    //grab new todo text from input
    var toDoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append(
      "<li><span><i class='fas fa-trash'></i></span>" + toDoText + "</li>"
    );
  }
});

$("#toggle-form").click(function() {
  $("input[type='text']").fadeToggle();
});
