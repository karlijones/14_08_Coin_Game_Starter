function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}


const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function(e) {
	if (e.key === 'ArrowDown' || e.key === 'Down'){
	const currTop = extractPos(avatar.style.top);
	avatar.style.top = `${currTop + 50}px`;
	} else if (e.key === 'ArrowUp' || e.key === 'Up'){
		const currTop = extractPos(avatar.style.top);
	avatar.style.top = `${currTop - 50}px`;
	} else if (e.key === 'ArrowRight' || e.key === 'Right'){
		const currLeft = extractPos(avatar.style.left);
	avatar.style.left = `${currLeft + 50}px`;
	avatar.style.transform = 'scale(1,1)'
	} else if (e.key === 'ArrowLeft' || e.key === 'Left'){
		const currTop = extractPos(avatar.computedStyleMap.top);
	avatar.style.left = `${currLeft - 50}px`;
	avatar.style.transform = 'scale(-1,1)';
	}
	if (isTouching(avatar,coin)) moveCoin();
});

const extractPos = (pos) => {
	if (!pos) return 100;
	return parseInt(pos.slice(0, -2));
};

const moveCoin = () => {
	const x = Math.floor(Math.random() * window.innerWidth);
	const y = Math.floor(Math.random() * window.innerHeight);
	coin.style.top = `${y}px`;
	coin.style.left = `${x}px`;
}

moveCoin();