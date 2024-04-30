$(document).ready(function () {
  $("#clubhousekeep").click(function () {
  });
  $("#dolkeep").click(function () {
   
  });
  $("#honestkeep").click(function () {
   
  });
  if (window.location.pathname == "/about.html") {
 
    $("#about").addClass("activemenuitem");
  }
  if (window.location.pathname == "/MyWork.html") {
   
    $("#workheader").addClass("activemenuitem");
  }
  if (window.location.pathname == "/ContactMe.html") {
    
    $("#contactheader").addClass("activemenuitem");
  }
  if (window.location.pathname == "/ContactMe.html") {
   
    $("#contactfooter").addClass("activemenuitem");
  }
  if (window.location.pathname == "/MyWork.html") {
    
    $("#workfooter").addClass("activemenuitem");
  }
  if (window.location.pathname == "/about.html") {
   
    $("#aboutfooter").addClass("activemenuitem");
  }
});
