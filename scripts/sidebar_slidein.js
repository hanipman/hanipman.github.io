function openSidebar() {
	document.getElementById('sidebar_ele').style.width = "100%";
	document.getElementById('about_me_link').onclick = closeSidebar;
	document.getElementById('edu_link').onclick = closeSidebar;
	document.getElementById('skills_link').onclick = closeSidebar;
	document.getElementById('exp_link').onclick = closeSidebar;
	document.getElementById('port_link').onclick = closeSidebar;
}

function closeSidebar() {
	document.getElementById('sidebar_ele').style.width = "0%";
}

function setSidebar() {
	if (document.getElementById('sidebar_ele').style.width === "100%") {
		closeSidebar();
	}
	else {
		openSidebar();
	}
}