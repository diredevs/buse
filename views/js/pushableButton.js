$(document).ready(function(){
  
  var tgBtn = $("#toggleMap");
  var isPushed = false;
  
  tgBtn.on("click", function(){
    if (!isPushed) {
    	isPushed = true;
    	following = true;
    	followMe();
    	tgBtn.addClass("pushed-button");  
    } else {
    	isPushed = false;
    	following = false;
    	enableMapDrag();
    	tgBtn.removeClass("pushed-button");
    }
  });
  
});

// oi