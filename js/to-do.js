
// Create a list of to-do items

var toDoItems = [
  {
    "text": "My",
    "completed": false
  },
  {
    "text": "to-do",
    "completed": true
  },
  {"text": "list",
"completed": true
  }
];

// This function creates a new to-do list item
function newToDoItem(itemText, completed) {
 var newItem = {
   "text": itemText,
   "completed": completed
 }; //this makes parameter into a toDoItem
 toDoItems.push(newItem); //this puts the new item 
 //at the bottom of the list
 var itemHTML = getToDoItemHTML(newItem);
 $(".todo-list").append(itemHTML);
 }

// This function adds an item to the to-do list
function addToDoItem() {
  var itemText = $("input[name=new-todo]").val();
  newToDoItem(itemText,false);
 
 
}

// This function cleans up all the completed to-do items
function clearCompletedToDoItems() {

  toDoItems = toDoItems.filter(function(toDoItem){
    return !toDoItem.completed;
  
});
$(".todo-list").find(".completed").remove();
}

// This function resets the to-do list to blank
function emptyList() {

toDoItems = [];
$(".todo-list").children().remove();
  console.log("Emptying to-do list");
}

// This function loads the to-do list when the page loads
function loadList() {
  console.log("Loaded to-do list");
}

// This function gets the HTML code to display a to-do item
function getToDoItemHTML(toDoItem) {
  var itemHTML = $("<li>"+toDoItem.text+"</li>");
 
  if(toDoItem.completed === true){
    
    $(itemHTML).addClass("completed");
  }
  return itemHTML;
//  console.log("Getting HTML of "+toDoItem);
}

function toggleToDoItemState(listItem){
 
var itemId = $(listItem).index();
toDoItems[itemId].completed = !toDoItems[itemId].completed;

$(listItem).toggleClass("completed");
}
$(document).ready(function(){
    $("#add-button").click(function(){
      addToDoItem();
    });
   
    $("#clear-button").click(function(){
      clearCompletedToDoItems();
    });

    $(document).on("dblclick","li", function(){
toggleToDoItemState(this);
});

    $("#empty-button").click(function(){
      emptyList();
    });
 loadList();
 toDoItems.forEach(function(toDoItem){
   var itemHTML = getToDoItemHTML(toDoItem);
   $(".todo-list").append(itemHTML);
 });
 
  /* $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div').click(function() {
       $(this).toggle(1000);
   }); */ //this causes the items specified to  fade out

});