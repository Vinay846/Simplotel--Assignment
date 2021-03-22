const imgArr = [
	'cat-nose.jpg',
	'contrail.jpg',
	'drizzle.jpg',
	'flight-formation.jpg',
	'golden-hour.jpg',
	'one-world-trade.jpg',
	'orange-tree.jpg'
];

const imgLeft = document.getElementById('cf1_image');
const imgMid = document.getElementById('cf2_image');
const imgRight = document.getElementById('cf3_image');

const count = document.getElementById('counter');

let arr = [ -1, 0, 1 ];

const changeImg = () => {
	imgLeft.style.backgroundImage = 'url(./images/' + imgArr[arr[0]] + ')';
	imgMid.style.backgroundImage = 'url(./images/' + imgArr[arr[1]] + ')';
	imgRight.style.backgroundImage = 'url(./images/' + imgArr[arr[2]] + ')';
};

const next = () => {
	let pTagInnerText = 0;
	if (arr[2]) {
		pTagInnerText = 1 + Number(arr[2]);
	} else {
		pTagInnerText = 1;
	}
	count.innerText = pTagInnerText;
	for (let i = 0; i < arr.length; i++) {
        if (arr[arr.length - 1] <= 6) {
            arr[i]++;
		}
	}
    changeImg();
};

let nextTime;
const run = () => {
	nextTime = setInterval(() => {
		next();
		if (arr[1] == imgArr.length - 1) {
			clearInterval(nextTime);
			// count.innerText = arr;
			arr[0] = -2;
			arr[1] = -1;
			arr[2] = 0;
			run();
		}
	}, 3 * 1000);
};

run();
