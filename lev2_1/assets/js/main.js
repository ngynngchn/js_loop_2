function imageArray() {
	let returnArray = [];
	for (let i = 1; i <= 100; i++) {
		if (i < 10) {
			returnArray.push(`image_00${i}.jpg`);
		} else if (i < 100 && i > 9) {
			returnArray.push(`image_0${i}.jpg`);
		}
	}
	console.log(returnArray);
}

imageArray();
