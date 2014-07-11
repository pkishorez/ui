
(function($){
	$.fn.dropdown = function(options){
		return this.each(function(){
			var elem=this;
			$(".button",this).click(function(){
				$(this).toggleClass("_clicked");
				$("ul",elem).toggleClass("_clicked");
			});
		});
	};
})(jQuery);