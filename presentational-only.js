$(document).ready(function()
{
  $('#load-more-content').click(function()
  {
    
    $('#more-content').toggleClass('shown');

    $('#load-more-content').hide();

    if( $('#more-content').hasClass('shown') )
    {
      $('#load-more-content').text('Hide content');
      $('#more-content').fadeIn('slow', function()
      {
        $('#load-more-content').fadeIn('slow');
      });
    }
    else
    {
      $('#load-more-content').text('Load some content');
      $('#more-content').fadeOut('slow', function()
      {
        $('#load-more-content').fadeIn('slow');
      });
    }
  });
});


// <!-- Display the countdown timer in an element -->


function showCountDown(elemId, dateStr) {
  // EXAMPLE:
  // showCountDown("demo","March 9, 2021 00:00:00")

  // Set the date we're counting down to
  var countDownDate = new Date(dateStr).getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById(elemId).innerHTML = "⏰ &emsp;" + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById(elemId).innerHTML = "WE'RE ALIVE!!!!! CHECK EMAIL FOR DOWNLOAD LINK OR CONTACT US DIRECTLY!";
    }
  }, 1000);
}
