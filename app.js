

	const canvas = document.getElementById('gameScreen'); // will using this medium as reference for our game

	const ctx = canvas.getContext('2d');
	//console.log(canvas); // Proof that canvas actually shows up 

	
	canvas.width = window.innerWidth;

	canvas.height = window.innerHeight;



	//this just to test whether object appears on the canvas 
	
	

	
	//ctx.beginPath();

	//ctx.arc(280,60, 40 ,2, Math.PI * 0);

	//ctx.closePath();
	
	//ctx.fill();

	//
	


	//this cooridnates will be use to pinpoint the snakes location since canvas uses x,y for positioning 
	let python = [{x:150,y:150}, 
		{x:140,y:150}, 
		{x:130,y:150},
		{x:120,y:150},
		{x:110,y:150},
	];


	let score = 0;

	let Navigation = false; // this will be the indicator 

	const drawSnakeAnatomy =(snakePart) => {

		ctx.fillStyle= 'green'; 

		ctx.strokeStyle ='black'; // this propert of canvas will change the color of snakes outline to the indicatied color 
	
		ctx.fillRect(snakePart.x, snakePart.y, 10, 15); 


		ctx.strokeRect(snakePart.x, snakePart.y, 10,15);

	};

	const makeSnake = () => {

		python.forEach(drawSnakeAnatomy);


	}


	// we are going to make this snake 

	const makeSnakeMove =() => {
		const head = {x : snake[0].x +dx , y:snake[0].y+dy};

	



	
	


	makeSnake();


	python.unshift(head);

	python.pop();

	}


	
	makeSnake();




	
