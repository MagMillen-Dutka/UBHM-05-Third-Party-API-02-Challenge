  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.
  var localeSettings = {};
  dayjs.locale(localeSettings);

  // Date and time at the top of the scheduler
  function dateAndTime() {
    var dateElement = $('#date');
    var timeElement = $('#time');
    var currentDate = dayjs().format('dddd, MMMM D, YYYY');
    var currentTime = dayjs().format('HH:mm:ss');
    dateElement.text(currentDate);
    timeElement.text(currentTime);
  }
  setInterval(dateAndTime, 1000);

  // main function coding for scheduler - including local stored info, time-block colour changes and save button working.

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
    // }
  // The  function below will save the user's input in a textarea to localStorage - only when the corresponding save button has been clicked.
    // function textEntry() {
      $('.saveBtn').on('click', function() {
        var key = $(this).parent().attr('id');
        var value = $(this).siblings('.description').val();
        localStorage.setItem(key, value);
      });
    // }

      $('.time-block').each(function() {
        var key = $(this).attr('id');
        var value = localStorage.getItem(key);
        $(this).children('.description').val(value);
      });
    }
   // The function below will refresh the color of each time block based on whether it's in the past(grey), present(red), or future(green) relative to the current time. 
    // function colorBlock() {
    //   $('.time-block').each(function() {
    //     const blockHour = parseInt(this.id);
    //     if (blockHour == currentHour) {
    //       $(this).removeClass('past future').addClass('present');
    //     } else if (blockHour < currentHour) {
    //       $(this).removeClass('future present').addClass('past');
    //     } else {
    //       $(this).removeClass('past present').addClass('future');
    //     }
    //   });


   
    // Call the three main functions to set up the page.
    // hourlyColor();
    // textEntry();                
    colorBlock();
   
});



  // $(".block").each(function () {

  //   // variable "hour" holds id hour from class block and pareInt is used to chang it from a string to an integer.
  //   var hour = parseInt($(this).attr("id"));

  //   // if statement to ditermin if in the past hour's
  //   if (hour < currentHour) {
  //       // adds grey to blocks
  //       $(this).addClass("past");
  //   }


  //     //else if statement to ditermin if in the present hour
  //     else if (hour === currentHour) {
  //       // removes grey to blocks
  //       $(this).removeClass("past");
  //       // adds red to blocks
  //       $(this).addClass("present");
  //   }

  //   // else statement to ditermin if in the future's
  //   else {
  //       // removes grey to blocks
  //       $(this).removeClass("past");
  //       // removes red to blocks
  //       $(this).removeClass("present");
  //       // adds green to blocks
  //       $(this).addClass("future");
  //   }
  // });