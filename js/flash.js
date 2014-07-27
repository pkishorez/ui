(function($){
	$.fn.flash = function(options){
		return this.each(function(){
			var elem=this;
			function display(){
				$(elem).addClass("_display");
			}
			function hide(){
				$(elem).removeClass("_display");
			}
			$(this).click(function(){
				display();
			});
			$(document.body).bind("keydown.flash",function(evt){
				if (evt.which===$.ui.keyCode.ESCAPE){
					display();
				}
			});
			$(".fcontent",this).click(function(evt){
				evt.stopPropagation();
			});
			$(".close",this).click(function(){
				display();
			});
		});
	};
})(jQuery);