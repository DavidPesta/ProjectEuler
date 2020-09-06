const DetectPalindromicNumber = (number) => {
	return number.toString() === number.toString().split("").reverse().join("");
}

let largestPalindromicNumber = 0;
for (let i = 100; i <= 999; i++) {
	for (let j = 100; j <= 999; j++) {
		let number = i * j;
		if (DetectPalindromicNumber(number)) {
			if (number > largestPalindromicNumber) {
				largestPalindromicNumber = number;
			}
		}
	}
}

console.log(largestPalindromicNumber);
