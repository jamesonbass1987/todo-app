 // Check off Specific Todos By Clicking

$("li").click(function(){
 $(this).toggleClass("completed");
});

// Remove item when 'x' is clicked
$("span").click(function(event){
  $(this).parent().fadeOut(350, function(){
    $(this).remove();
  })
  event.stopPropagation();
})
