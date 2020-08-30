const SumOfEvenFibTerms = (valueLimit) => {
	let sum = 0;
	let previousTerms = [];
	let thisTerm = 1;
	
	do {
		if (thisTerm % 2 == 0) {
			sum += thisTerm;
		}
		
		thisTerm = thisTerm + (previousTerms[previousTerms.length - 2] ?? 0);
		previousTerms.push(thisTerm);
	}
	while (thisTerm <= valueLimit);
	
	return sum;
}

console.log(SumOfEvenFibTerms(4000000));
