const button = document.createElement('button');
button.innerHTML = 'PEACE be with you';
document.getElementById('main').appendChild(button);


button.addEventListener('click', () => {
	const request = new XMLHttpRequest();
	request.onload = function(){
		button.innerHTML = 'check your console log.';
		console.log(JSON.parse(request.response));
	}
	request.open('GET', 'test', true);
	request.send();
});

