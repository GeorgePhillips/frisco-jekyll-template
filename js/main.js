(function() {
	var header = document.getElementById("mainHeader");

	var changeHeader = function () {
		if (document.body.scrollTop >= 50 ) {
			header.classList.add("header-background");
		}
		else {
			header.classList.remove("header-background");
		}
	};

	window.onscroll = changeHeader;

	changeHeader();

	$('a[href*=\\#]').on('click', function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
})();
