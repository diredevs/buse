$(document).ready(function(){
  
  var tgBtn = $("#toggleMap");
  var isPushed = false;
  
  tgBtn.on("click", function(){
    if (!isPushed) {
    	isPushed = true;
    	following = true;
    	tgBtn.addClass("pushed-button");  
    } else {
    	isPushed = false;
    	following = false;
    	tgBtn.removeClass("pushed-button");
    }
  });
  
});