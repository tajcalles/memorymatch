// Build a 4 x 4 or any size grid you want
// Be able to click on each grid item and reveal the value
// Be able to click on another item to reveal another item
// If both items match, alert the user and keep showing those cards
// If both items don't match, hide the values again and alert the user
// Alert the user that they won once that matched all the items on the board
$(document).ready(function(){
   $('.collapsible').collapsible();
 });

$('.collapsible').collapsible({
    accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    onOpen: function(el) { alert('Open'); }, // Callback for Collapsible open
    onClose: function(el) { alert('Closed'); } // Callback for Collapsible close
  });
// Open
// $('.collapsible').collapsible('open', 0);
//
// // Close
// $('.collapsible').collapsible('close', 0);
//
// // Destroy
// $('.collapsible').collapsible('destroy');
