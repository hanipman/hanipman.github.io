function openModal(modal_id) {
	var modal = document.getElementById(modal_id);

	modal.style.display = "flex";
	document.body.style.overflow = "hidden";

	window.onclick = function(event) {
		if (event.target === modal) {
			modal.style.display = "none";
			document.body.style.overflow = "auto";
		}
	}
}

function closeModal(modal_id) {
	var modal = document.getElementById(modal_id);

	modal.style.display = "none";
	document.body.style.overflow = "auto";
}