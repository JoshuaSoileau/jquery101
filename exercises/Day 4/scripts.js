
$(function() {

  /* Fades in the first to do list */
  $('.to-do-container').show('fade', 1000);


  /* Exercise 1 */
  /* First thing's first, we need to be able to add new items to our Hit List */
  /* Insert "New Target" button functionality below. Should 
   *    1. Pop up and prompt user for title of new to do item.
   *    2. Save that value as a variable.
   *    3. Find the <ul> that is an ancestor of the <button> that was clicked.
   *    4. Insert a new <li> into that <ul> with the variable you saved in step 2 as it's contents.
   * */






  /* Exercise 2 */
  /* Make your list sortable. 
   *     1. Using the new element you made in Exercise 1, traverse up the DOM to it's parent <ul> 
   *     2. Call .sortable() on that <ul> with these parameters:   $().sortable({ revert: true, connectWith: 'ul' })  
   * You now have a sortable list that you can drag and drop! */







  /* Exercise 3 */
  /* We need the ability to cross out our marks as we take them down! */
  /* Insert 'Eliminate' button into the <li> 
   * Modify your Exercise 1 code to:
   *     1. Append a new <button> (with class "eliminate") to the end of the <li> we created in exercise 1. The contents should just be "Eliminate"
   *     2. add an onclick event (outside of the click event made in Exercise 1) to observe clicks on the 
   *        ".eliminate" button.
   *        1. On "click" of the "eliminate" button, you should change the CSS of the <li> (that the button is inside),
   *           to include "text-decoration" as "line-through", change the text "color" to "darkred", and change the "opacity" to "0.3".
   *  */







  /* Exercise 4 */
  /* After a while, I get tired of looking at all these crossed off marks. Let's add the ability to remove them */
  /* Insert 'Archive' button into the <li> you created in Step 1
   * Modify your Exercise 1 code to:
   *     1. Append a new <button> (with class "archive") to the end of the <li> we created in exercise 1. The contents should just be "Archive"
   *     2. add an onclick event (outside of the click event made in Exercise 1) to observe clicks on the 
   *        ".archive" button.
   *        1. On "click" of the "archive" button, you should use a jQuery UI "effect" to remove the <li> that was clicked from the list. 
   *           There are a handful of them, find a cool one!
   *  */







  /* Exercise 5 */
  /* Our targets are going to be in more then one city of course! */
  /* Insert 'Add New City' button functionality below. On click, it should 
   *    1. Prompt the user for the name of the new city, and save it as a variable.
   *    2. Use the original HTML as a variable to insert new div with a class 'to-do-container' into the body. 
   *          Create a new variable and save the original to-do-container HTML as a string.
   *          For convenience, here is that HTML:     <div class="to-do-container" style="display: none"><h3>Prague</h3><ul><button class="new-target"><span>+</span>New Target</button><div class="clearfix"></div></ul></div>
   *          But REMEMBER, you have to insert the new city name in place of Prague in that HTML above. 
   *
   *    3. Use that string to insert a new div into the END of the BODY tags as a new div.
   *    4. You'll notice the new div is 'display: none'. Add an animation to the new div to 
   *       set it to display: block (use one of the numerous jQueryUI "effects" {google it}) */







  /* Exercise 6 */
  /* Every spy has to be able to cover their butts if this information falls into the wrong hands. */
  /* Let's add Self Destruct button functionality.
   *    1. Remove "display: none" from the div at the top of "body", so we can use it.
   *    2. On click of the self destruct button, we should select all ".to-do-container" elements, and all <li>s, on the page
   *       and call $().effect('explode') on them all. */










});