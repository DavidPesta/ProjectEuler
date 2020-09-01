const LargestPrimeFactor = (number) => {
	let primesOfNumber = [];
	
	let primes = [];
	let testPrimeCursor = 2; // start with 2 because 1 is not a prime number
	
	// Keep finding new primes forever until you find all the primes of the number.
	while(true) {
		let isPrime = true;
		for (let len = primes.length, i = 0; i < len; i++) {
			if (Number.isInteger(testPrimeCursor / primes[i])) {
				isPrime = false;
				break;
			}
		}
		
		if (isPrime) {
			primes.push(testPrimeCursor);
			if (Number.isInteger(number / testPrimeCursor)) {
				primesOfNumber.push(testPrimeCursor);
				if (number === primesOfNumber.reduce((a, c) => a * c)) {
					break;
				}
			}
		}
		
		testPrimeCursor++;
	}
	
	return primesOfNumber[primesOfNumber.length - 1];
};

console.log(LargestPrimeFactor(600851475143));
