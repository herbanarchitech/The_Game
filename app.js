

	const canvas = document.getElementById("gameScreen") // will using this medium as reference for our game

	const ctx = canvas.getContext('2d')

	
	const canvas.width = window.innerWidth;

	const canvas.height = window.innerHeight;


	
			

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

	ctx.fillStyle ='red';

	ctx.lineWidth = 5;

	ctx.beginPath();

	ctx.arc(100,50, 0 , Math.PI * 2);

	ctx.closePath();
	
	ctx.fill();
	ctx.stroke();


	
