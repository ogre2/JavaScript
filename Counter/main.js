document.addEventListener('DOMContentLoaded', () => {
	// Display number
	let number = document.querySelector('.number');
	// Decrease button
	let decrease = document.querySelector('.decrease');
	// Reset button
	let reset = document.querySelector('.reset');
	// Increase button
	let increase = document.getElementById('increase');
	// Current count
	let count = 0;
	
	/**
	*@function Decrease button event listener -> Decrease the number displayed
	**/
	decrease.addEventListener('click', (e) => {
		//Preventing the click action from refreshing the page
		e.preventDefault();
		
		// Decrementing the current count
		count--;
		
		// Displaying the new count
		number.innerText = count;
		
		// Adding number change animation class
		number.classList.add('animate')
		
		// Timeout function to remove the added animation class
		setTimeout(function() {
			// Removing class
			number.classList.remove('animate')
		}, 1200);
		
		//console.log(count);
	});
	
	/**
	*@function Decrease button event listener -> Decrease the number displayed
	**/
	reset.addEventListener('click', (e) => {
		//Preventing the click action from refreshing the page
		e.preventDefault();
		
		// Reseting the current count to 0
		count = 0;
		
		// Displaying the reset
		number.innerText = count;
		
		// Adding number change animation class
		number.classList.add('animate')
		
		// Timeout function to remove the added animation class
		setTimeout(function() {
			// Removing class
			number.classList.remove('animate')
		}, 1200);
		
		//console.log(count);
	});
	
	/**
	*@function Increase button event listener -> Increase the number displayed
	**/
	increase.addEventListener('click', (e) => {
		//Preventing the click action from refreshing the page
		e.preventDefault();
		
		// Incrementing the count
		count++;
		
		// Displaying the new count
		number.innerText = count;
		
		// Adding number change animation class
		number.classList.add('animate')
		
		// Timeout function to remove the added animation class
		setTimeout(function() {
			number.classList.remove('animate')
		}, 1200);
				
		//console.log(count);
	});
});