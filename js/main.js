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
})();
