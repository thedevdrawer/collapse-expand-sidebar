const menu = document.querySelector(".menu"); // get menu item for click event

menu.addEventListener("click", function () {
	expandSidebar();
	showHover();
	getSearch();
});

/**
 * expand sidebar if it is short, otherwise collapse it
 */
function expandSidebar() {
	document.querySelector("body").classList.toggle("short");
	let keepSidebar = document.querySelectorAll("body.short");
	if (keepSidebar.length === 1) {
		localStorage.setItem("keepSidebar", "true");
	} else {
		localStorage.removeItem("keepSidebar");
	}
}

/**
 * show hover effect on sidebar
 */
function showHover() {
	const li = document.querySelectorAll(".short .sidebar li a");
	if (li.length > 0) {
		li.forEach(function (item) {
			item.addEventListener("mouseover", function () {
				const text = item.querySelector(".text");
				text.classList.add("hover");
			});
			item.addEventListener("mouseout", function () {
				const text = item.querySelector(".text");
				text.classList.remove("hover");
			});
		});
	}
}

/**
 * get search button click if short sidebar or mobile
 */
function getSearch() {
	document.querySelector(".callSearch").addEventListener("click", function (e) {
		e.preventDefault();
		if (
			document.querySelector("body").classList.contains("short") ||
			window.innerWidth <= 844
		) {
			document.querySelector(".searchWindow").classList.toggle("active");
		}
	});
	document
		.querySelector(".cancelSearch")
		.addEventListener("click", function () {
			document.querySelector(".searchWindow").classList.toggle("active");
		});
}

/**
 * check local storage for keep sidebar
 */
function showStoredSidebar() {
	if (localStorage.getItem("keepSidebar") === "true") {
		document.querySelector("body").classList.add("short");
		showHover();
		getSearch();
	}
}

showStoredSidebar(); // show sidebar if stored in local storage
