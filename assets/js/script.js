// Global variables and local window commands for time.
  var localeSettings = {};
  dayjs.locale(localeSettings);

// Date and time at the top of the scheduler in the header section. 
// Capital HH on currentTime switches time from 12 hour to 24 hour clock.
// Interval is also set here for refreshing the date and time and this is set to  refreshing every 1 second (1000).
  function dateAndTime() {
    var dateElement = $('#date');
    var timeElement = $('#time');
    var currentDate = dayjs().format('dddd, MMMM D, YYYY');
    var currentTime = dayjs().format('HH:mm:ss');
    dateElement.text(currentDate);
    timeElement.text(currentTime);
  }
  setInterval(dateAndTime, 1000);

// main function coding for scheduler - including local stored info, time-block colour changes and save button.

$(function () {
    
    var currentHour = dayjs().format('H');

    function colorBlock() {  
      $('.time-block').each(function() {  
        var blockHour = $(this).attr("id").split("hour-")[1]; 
        console.log("currentHour" + currentHour)
        console.log("blockHour" + blockHour)
        if (blockHour == currentHour) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
         } else if (blockHour < currentHour) {
          $(this).removeClass("present");
          $(this).removeClass("future");
          $(this).addClass("past");
        } else if (blockHour > currentHour) {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
  
// The  function below will save the user's input in a textarea to localStorage - only when the corresponding save button has been clicked.
      $('.saveBtn').on('click', function() {
        var key = $(this).parent().attr('id');
        var value = $(this).siblings('.description').val();
        localStorage.setItem(key, value);
      });
    
      $('.time-block').each(function() {
        var key = $(this).attr('id');
        var value = localStorage.getItem(key);
        $(this).children('.description').val(value);
      });
    }
   
// calling on the function above for colour changing.              
    colorBlock();
   
});