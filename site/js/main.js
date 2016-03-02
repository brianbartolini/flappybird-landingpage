$(document).ready(function(){

    $(".calltotrytext").mouseover(function(){
	$(this)
	.velocity({ scale: "1.5"}, 150, "easeInOut")
	.velocity("reverse");
});
});
