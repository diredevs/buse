$(document).ready(function(){
  
  var tgBtn = $("#toggleMap");
  var isPushed = false;
  
  tgBtn.on("click", function(){
    if (isPushed) {
      enableMapDrag();
      tgBtn.removeClass("pushed-button");
      isPushed = false;
    } else {
      targetMe();
      tgBtn.addClass("pushed-button");  
      isPushed = true;
    }
  });
  
});