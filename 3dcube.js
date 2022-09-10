// const DEGREES = ['10', '0', '-10', '0'];

// function counterCreator(initialCounter) {
// 	let counter = initialCounter;
// 	let state = DEGREES[counter];

// function increment (){
// 	if (counter === 3){
// 		counter = 0;
// 		state = DEGREES[counter];
// 		return;
// 	}
// 	counter=counter+1;
// 	state = DEGREES[counter];
// }

// function getState(){
// 	return state;
// }
// return{
// 	getState: getState,
// 	increment: increment
// }
// }


(function () {
	var rotateY = 0,
		  rotateX = 0;

	document.onkeydown = function (e) {
			   if (e.keyCode === 37) rotateY -= 8
		else if (e.keyCode === 38) rotateX = rotateX+8
		else if (e.keyCode === 39) rotateY += 8
		else if (e.keyCode === 40) rotateX = rotateX-8

		document.querySelector('.cube').style.transform = 
      'rotateY(' + rotateY + 'deg)'+
      'rotateX(' + rotateX + 'deg)' + ' scale(0.6,0.6)' + 'scaleZ(0.6)';
    }
})();


// const trackerX = counterCreator(0);
// const trackerZ = counterCreator(2);

const cube = document.querySelector(".cube");
const btn = document.querySelector(".action");
let rotateY = -45;
const rotateCubeY = (evt) => {
	// trackerX.increment();
	// trackerZ.increment();
  rotateY = rotateY+90;
  cube.style.transform = 
  	'rotateX(' + -10 +'deg)' +
      'rotateY(' +rotateY+ 'deg)' + 
      "rotateZ(" + 0 + "deg)" +
      ' scale(0.6,0.6)' + 'scaleZ(0.6)' ;

}






function count () {
let count = 0
 count=count + 1;
 console.log("количество нажатий:"+count);
 }

const box = document.querySelector(".box");
const CreatePopUp = (evt) => {
const target = evt.target;
	if (target.closest('.cube')) {
		let div = document.createElement('div');
		div.setAttribute('class', 'popUp');
		box.appendChild(div);
		}
}


function rotateCube (event){
    let rotation = event.rotation;
}


btn.addEventListener("click", rotateCubeY, count);	
btn.addEventListener("click", count);	
document.addEventListener("click", CreatePopUp);
cube.addEventListener('touchmove', rotateCube);