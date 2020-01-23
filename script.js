/**
 * Task 1: hide the image
 * Task 2: show the image when the button is clicked, 
 *         hide the button, 
 *         change the text to say "Double click on Bender!"
 * Task 3: change the image when it is double clicked to Bender applause    
 *         change the text to say "You Did It!"
 * 
 * 
 * Bender applause: https://media.giphy.com/media/e16R8k8YnvrYk/giphy.gif 
 */
 $('#bender').hide();
$('#myButton').click(function() {
    $('#bender').show();
    $('myButton').hide();
$('#message').text("Double click bender!");
});
  
  
$('#bender').hover(function() {
$('#bender').attr('src','https://cdn.images.express.co.uk/img/dynamic/67/590x/World-Cup-ball-FIFA-red-Telstar-Mechta-979978.jpg?r=1533235882513');
  
  
});
  
  
  
                                                                                                  