 // Check off Specific Todos By Clicking

$("ul").on("click", "li", function(){
 $(this).toggleClass("completed");
});

// Remove item when 'x' is clicked
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(350, function(){
    $(this).remove();
  })
  event.stopPropagation();
})

// Add new todo when entered into input
$("#newTodo").keypress(function(event){
  if (event.which === 13){
    //grab text from input
    let todoText = $(this).val()
    //create new li and add to ul
    $('ul').append(`<li class="noselect"><span><i class="fa fa-trash" aria-hidden="true"></i></span> ${todoText}</li>`)
    //remove value
    $(this).val("")
  }
})

//Select + icon and fade input in and out
$('.fa-plus').click(function(){
  $("#newTodo").slideToggle(300);
})
