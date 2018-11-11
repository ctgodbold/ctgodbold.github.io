$(document).ready(function()  {
  $(".button").click(function()  {
      if ($(".sidebar").hasClass("toggleOff")) {
          $(".sidebar").removeClass("toggleOff").addClass("toggleOn");
      } else if ($(".sidebar").hasClass("toggleOn")) {
          $(".sidebar").removeClass("toggleOn").addClass("toggleOff");
      }
      
  });
});
