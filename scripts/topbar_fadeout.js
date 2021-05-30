var lastScrollTop = 0;

window.addEventListener('scroll', function() {
	var st = window.pageYOffset || document.documentElement.scrollTop
	var topbar = document.getElementById('topbar_ele');
	if (st > lastScrollTop) {
		topbar.style.top = "-30px";
	}
	else {
		console.log("up")
		topbar.style.top = "0";
	}
	lastScrollTop = st <= 0 ? 0 : st;
}, false);