var css= document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


// function printsomething(){
	// console.log("Input event for color1");
// }

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";
		css.textContent = 	body.style.background + "; "
	}


//function is for getting  input color
  
// color1.addEventListener("input", printsomething)

color1.addEventListener("input", setGradient)
	//function()){console.log(color1.value);	})


color2.addEventListener("input", setGradient)
// function()){console.log(color2.value);})//