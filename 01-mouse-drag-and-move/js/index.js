let isDragging = false;
let offsetX, offsetY;

element.addEventListener('mousedown', (e) => {
	isDragging = true;
	offsetX = e.clientX - element.getBoundingClientRect().left;
	offsetY = e.clientY - element.getBoundingClientRect().top;
	element.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
	if (!isDragging) return;

	const x = e.clientX - offsetX;
	const y = e.clientY - offsetY;

	element.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener('mouseup', () => {
	console.log('鼠标移开了');
	isDragging = false;
	element.style.cursor = 'grab';
});

document.addEventListener('mouseleave', () => {
	if (isDragging) {
		isDragging = false;
		element.style.cursor = 'grab';
	}
});
