const circle = document.querySelector(".circle");
let pricing = "annually";
const prices = {
	monthly: ["&dollar;19.99", "&dollar;24.99", "&dollar;39.99"].reverse(),
	annually: ["&dollar;399.99", "&dollar;249.99", "&dollar;199.99"].reverse()
};
function updateSelection() {
	document.querySelector(".selected").classList.remove("selected");
	document.getElementById(pricing).classList.add("selected");
}
function updatePrices() {
	const priceElements = document.querySelectorAll(".card-pricing");
	priceElements.forEach(e => {
		e.classList.add("animated", "bounceOut");
	});
	setTimeout(() => {
		priceElements.forEach((e, i) => (e.innerHTML = prices[pricing][i]));

		priceElements.forEach(e => {
			e.classList.remove("bounceOut");
			e.classList.add("bounceIn");
		});
	}, 1000);
}
function changePricing(e) {
	const parent = e.target;
	if (pricing === "annually") {
		pricing = "monthly";
		parent.style.transform = "translateX(125%)";
		updateSelection();
		updatePrices();
	} else {
		pricing = "annually";
		parent.style.transform = "translateX(0%)";
		updateSelection();
		updatePrices();
	}
}
circle.addEventListener("click", changePricing);
