

	const canvas = document.getElementById('gameScreen'); // will using this medium as reference for our game

	const ctx = canvas.getContext('2d');
	console.log(canvas);

	
	canvas.width = window.innerWidth;

	canvas.height = window.innerHeight;


	//canvas.width = 500;
	//canvas.height = 500;


	
			

	//Will be using built in canvas functions to bring the snake life

/*

	const drawSnake = () =>{

		let var canvas = document.getElementById('canvas');
		if(canvas.getConext) {

			let ctx = canvas.getConText('2d');

			ctx.fillStyle = 'rgb(200,0,0)';

			ctx.fillRect(25,25,100, 100);


		}

	}



*/



	ctx.beginPath();

	ctx.arc(50,50, 30 ,0, Math.PI * 2);

	ctx.closePath();
	
	ctx.fill();


	
