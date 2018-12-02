//select
var replay = document.getElementById("replay");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

var diff = 6;

var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

//css change on buttons
var buttons = document.querySelectorAll("button");
//---------------------

//colorCreate();
var colors = makeColors(diff);
var picked = Math.floor(Math.random()*diff);
var pickedColor = colors[picked];
colorDisplay.innerHTML = pickedColor;

for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		if(this.style.backgroundColor == pickedColor) {
			messageDisplay.innerHTML = "Correct!";

			for(var j = 0; j < squares.length; j++) {
				squares[j].style.backgroundColor = pickedColor;
			}
			h1.style.backgroundColor = pickedColor;
			replay.textContent = "PLAY AGAIN?";

			//css change on buttons
			for(var k = 0; k < buttons.length; k++) {
				buttons[k].style.color = pickedColor;
			}
			if(diff == 6) {
				hard.style.color = "white";
				hard.style.backgroundColor = pickedColor;
				easy.style.color = pickedColor;
				easy.style.backgroundColor = "white";
				replay.style.color = pickedColor;
				replay.style.backgroundColor = "white";
			} else {
				easy.style.color = "white";
				easy.style.backgroundColor = pickedColor;
				hard.style.color = pickedColor;
				hard.style.backgroundColor = "white";
				replay.style.color = pickedColor;
				replay.style.backgroundColor = "white";
			}
			//---------------------

		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.innerHTML = "Try Again";
		}
	});
}


function makeColors(num) {
	result = [];
	for(var i = 0; i < num; i++) {
		var color = "rgb(" + Math.floor(Math.random()*256).toString() + ", " + Math.floor(Math.random()*256).toString() + ", " + Math.floor(Math.random()*256).toString() + ")";
		result.push(color);
	}
	return result;
}

replay.addEventListener("click", function() {
	recreate();
});

replay.addEventListener("mouseover", function() {
	if(messageDisplay.textContent == "Correct!") {
		replay.style.color = "white";
		replay.style.backgroundColor = pickedColor;
	} else {
		replay.style.color = "white";
		replay.style.backgroundColor = "steelblue";
	}
});

replay.addEventListener("mouseout", function() {
	if(messageDisplay.textContent == "Correct!") {
		replay.style.color = pickedColor;
		replay.style.backgroundColor = "white";
	} else {
		replay.style.color = "steelblue";
		replay.style.backgroundColor = "white";
	}
});

easy.addEventListener("click", function() {
	if(diff != 3) {
		diff = 3;
		recreate();
		// easy.classList.add("selected");
		// hard.classList.remove("selected");
	}
});

easy.addEventListener("mouseover", function() {
	if(diff != 3) {
		if(messageDisplay.textContent == "Correct!") {
			easy.style.color = "white";
			easy.style.backgroundColor = pickedColor;
		} else {
			easy.style.color = "white";
			easy.style.backgroundColor = "steelblue";
		}
	}
});

easy.addEventListener("mouseout", function() {
	if(diff != 3) {
		if(messageDisplay.textContent == "Correct!") {
			easy.style.color = pickedColor;
			easy.style.backgroundColor = "white";
		} else {
			easy.style.color = "steelblue";
			easy.style.backgroundColor = "white";
		}
	}
});

hard.addEventListener("click", function() {
	if(diff != 6) {
		diff = 6;
		recreate();
		// hard.classList.add("selected");
		// easy.classList.remove("selected");
	}
});

hard.addEventListener("mouseover", function() {
	if(diff != 6) {
		if(messageDisplay.textContent == "Correct!") {
			hard.style.color = "white";
			hard.style.backgroundColor = pickedColor;
		} else {
			hard.style.color = "white";
			hard.style.backgroundColor = "steelblue";
		}
	}
});

hard.addEventListener("mouseout", function() {
	if(diff != 6) {
		if(messageDisplay.textContent == "Correct!") {
			hard.style.color = pickedColor;
			hard.style.backgroundColor = "white";
		} else {
			hard.style.color = "steelblue";
			hard.style.backgroundColor = "white";
		}
	}
});

function recreate() {
	colors = makeColors(diff);
	picked = Math.floor(Math.random()*diff);
	pickedColor = colors[picked];
	colorDisplay.innerHTML = pickedColor;

	for(var i = 0; i < 3; i++) {
		squares[i].style.backgroundColor = colors[i];
	}

	if(diff == 6) {
		for(var i = 3; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
		hard.style.backgroundColor = "steelblue";
		easy.style.backgroundColor = "white";
		hard.style.color = "white";
		easy.style.color = "steelblue";
		replay.style.color = "steelblue";
		replay.style.backgroundColor = "white";
	} else {
		for(var i = 3; i < squares.length; i++) {
			squares[i].style.backgroundColor = "#232323";
			squares[i].style.display = "none";
		}
		easy.style.backgroundColor = "steelblue";
		hard.style.backgroundColor = "white";
		easy.style.color = "white";
		hard.style.color = "steelblue";
		replay.style.color = "steelblue";
		replay.style.backgroundColor = "white";
	}

	h1.style.backgroundColor = "steelblue";
	messageDisplay.innerHTML = "";

	replay.textContent = "NEW COLORS";
}