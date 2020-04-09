window.addEventListener("load", () => {
	let nightMode = true;

	let button = document.querySelector(".button");
	let body = document.querySelector("body");
	let circle = document.querySelector(".circle");

	let firstHeader = document.querySelector("h2");
	let followers = document.querySelector(".followers");
	let header = document.querySelector("header");

	let lightCircle = document.querySelector(".lightCircle");
	let numbers = document.querySelectorAll(".number");
	let smallCards = document.querySelectorAll(".small-card");

	let socialCards = document.querySelectorAll(".social-card");
	let span = document.querySelector("span");
	let usernames = document.querySelectorAll(".username");

	function singleChange() {
		body.style.backgroundColor = "hsl(0, 0%, 100%)";
		header.style.backgroundColor = "hsl(225, 100%, 98%)";
		firstHeader.style.color = "hsl(230, 17%, 14%)";
		followers.style.color = "hsl(228, 12%, 44%)";
		span.style.color = "hsl(228, 12%, 44%)";
		circle.style.visibility = "hidden";
		lightCircle.style.display = "inline";
	}

	function socialCardsColor() {
		for (card of socialCards) {
			card.style.backgroundColor = "hsl(227, 47%, 96%)";
		}
		for (card of smallCards) {
			card.style.backgroundColor = "hsl(227, 47%, 96%)";
		}
	}

	function numbersColor() {
		for (number of numbers) {
			number.style.color = "hsl(230, 17%, 14%)";
		}
	}

	function usernameColor() {
		for (username of usernames) {
			username.style.color = "hsl(228, 12%, 44%)";
		}
	}

	function darkSingleChange() {
		body.style.backgroundColor = "hsl(230, 17%, 14%)";
		header.style.backgroundColor = "hsl(232, 19%, 15%)";
		firstHeader.style.color = "hsl(0, 0%, 100%)";
		followers.style.color = "hsl(228, 12%, 44%)";
		span.style.color = "hsl(0, 0%, 100%)";
		circle.style.visibility = "visible";
		lightCircle.style.display = "none";
	}

	function darkSocialCardColor() {
		for (card of socialCards) {
			card.style.backgroundColor = "hsl(228, 28%, 20%)";
		}
		for (card of smallCards) {
			card.style.backgroundColor = "hsl(228, 28%, 20%)";
		}
	}

	function darkNumberColor() {
		for (number of numbers) {
			number.style.color = "hsl(0, 0%, 100%)";
		}
	}

	function darkUsernameColor() {
		for (username of usernames) {
			username.style.color = "hsl(228, 34%, 66%)";
		}
	}

	button.addEventListener("click", function() {
		if (nightMode) {
			singleChange();
			socialCardsColor();
			numbersColor();
			usernameColor();
			nightMode = false;
		} else {
			darkSingleChange();
			darkSocialCardColor();
			darkNumberColor();
			darkUsernameColor();
			nightMode = true;
		}
	});
});
