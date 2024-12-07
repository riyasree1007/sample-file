<script> 
// Javascript program to illustrate 
	// how to calculate BMI 
	function BMI(height, weight){ 
	let bmi = weight/Math.pow(height, 2); 
	return bmi; 
	} 
	let height = 1.79832; 
		let weight = 70; 
		
		// Function call 
		let bmi = BMI(height, weight); 
		process.stdout.write("The BMI is " + bmi + " so "); 
		
		// Conditions to find out BMI category 
		if (bmi < 18.5) 
			console.log("underweight"); 

		else if (bmi >= 18.5 && bmi < 24.9) 
			console.log("Healthy"); 

		else if (bmi >= 24.9 && bmi < 30) 
		console.log("overweight"); 

		else if (bmi >= 30) 
			console.log("Suffering from Obesity"); 
			
			// This code is contributed by aarohirai2616. 
</script>
