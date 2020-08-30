const SumMultiplesBelowNumber = (multiplesOf, number) => {
	let sum = 0;
	
	for (let i = 1; i < number; i++) {
		for (const multipleOf of multiplesOf) {
			if (i / multipleOf == Math.floor(i / multipleOf)) {
				sum += i;
				
				// Prevent the same i from being counted more than once if
				// they share the same factor of more than one multipleOf's
				break;
			}
		}
	}
	
	return sum;
}

console.log(SumMultiplesBelowNumber([3, 5], 1000));
