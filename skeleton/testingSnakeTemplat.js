

	const canvas = document.getElementById('gameScreen'); // will using this medium as reference for our game

	const ctx = canvas.getContext('2d');

	console.log(canvas); // Proof that canvas actually shows up 

	
	canvas.width = window.innerWidth;

	canvas.height = window.innerHeight;

	const block = 30; // this is the starting point for the snake

	


	//this just to test whether object appears on the canvas 
	
	

	/*
	ctx.beginPath();

	ctx.arc(50,50, 30 ,0, Math.PI * 2);

	ctx.closePath();
	
	ctx.fill();


	*/


	alert(1);

	let snake = [{x:150, y:150},  140
