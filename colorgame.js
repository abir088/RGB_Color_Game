//We can rewrite our code in the following way
// var game ={};
// game.init = function(){
// 	setupModeButtons();
// 	setupSquares();
// 	reset();
// }

// game.init();



var numSquares=6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listener
	setupModeButtons();
	setupSquares();
	reset();

}

function setupModeButtons(){
	for(var i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		
		this.textContent === "Easy" ? numSquares=3 : numSquares=6;

		// if(this.textContent == "Easy"){
		// 	numSquares=3;
		// } else{
		// 	numSquares =6;
		// }

		reset();

		//figure out how many squares to show
		//pick new colors
		//pick a new pickedColor
		//update page to reflect changes

		});
	}
}

function setupSquares(){
	for(var i=0; i<squares.length; i++){
 	//add initial colors to squars
 	// squares[i].style.backgroundColor = colors[i];
 	//add clicle listens to squars
 		squares[i].addEventListener("click",function(){
 		//grab color of clicked square
 		var clickedColor= this.style.backgroundColor;
 		//compare color to pickedColor
 		if(clickedColor === pickedColor){
 			messageDisplay.textContent = "Correct!"
 			resetButton.textContent ="Play Again?"
 			changeColors(clickedColor);
 			h1.style.backgroundColor = clickedColor;
 		} else {
 			this.style.backgroundColor = "#232323";
 			messageDisplay.textContent = "Try Again";
 		}
 		});
	}
}


function reset(){
		//generate all new colors
	colors = generateRandomColor(numSquares);
	//pick a random color from array
	pickedColor =pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	
	messageDisplay.textContent = "";
	//change colors of square
	for(var i=0; i <squares.length; i++){
		if(colors[i]){
			squares[i].style.display ="block";
			squares[i].style.backgroundColor = colors[i];
		} else {
		squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
 	//
}


// easyBtn.addEventListener("click",function(){
//  	hardBtn.classList.remove("selected");
//  	easyBtn.classList.add("selected");
//  	numSquares =3;
//  	colors = generateRandomColor(numSquares);
//  	pickedColor=pickColor();
//  	colorDisplay.textContent = pickedColor;
//  	for( var i =0; i <squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else{
// 			squares[i].style.display = "none";
// 		}
 		
//  	}
// });

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
//  	easyBtn.classList.remove("selected");
//  	numSquares=6;
//  	colors = generateRandomColor(numSquares);
//  	pickedColor=pickColor();
//  	colorDisplay.textContent = pickedColor;
//  	for( var i =0; i <squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });	
 


resetButton.addEventListener("click", function(){
 	reset();
});

function changeColors(color){
	//loop through all squares
	for(var i=0; i < squares.length; i++){
	//change each color to match given color
	squares[i].style.backgroundColor = color;
 }
}

//picking randon color
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
//make an array
var arr = [];
//reapeat num times
for(var i=0; i<num; i++){
	//add num random colors to array
	//get random colors and push into arr
	arr.push(randomColor())
}
	
return arr;

}
//return that array


function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a green from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random()*256);
	//"rgb(r, g, b)"
	return "rgb(" + r +", " + g + ", " + b + ")";

}