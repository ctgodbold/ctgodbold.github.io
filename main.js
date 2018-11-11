$(document).ready(function()  {
  $(".button").click(function()  {
      if ($(".sidebar").hasClass("toggleOff")) {
          $(".sidebar").removeClass("toggleOff").addClass("toggleOn");
      } else if ($(".sidebar").hasClass("toggleOn")) {
          $(".sidebar").removeClass("toggleOn").addClass("toggleOff");
      }
      
  });
});
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
c.fillRect(100, 100, 100, 100);