import Chart from 'chart.js/auto'

//----------  HTML elements -------------------------------
//---------------------------------------------------------

const add = document.getElementById('add');
const remove = document.getElementById('remove');
const clear = document.getElementById('clear');
const listAll = document.getElementById('list-all');
const stage = document.getElementById('stage');
const fullList = document.createElement('ol');

const CARD_SIZE = 200;

//--------------------------------------------------------
//------------ global variables ---------------------------
//---------------------------------------------------------

let i;
let list = [];
let listNodes = [];
let records = [];

//---------------------------------------------------------
//---------------- utilities ------------------------------
//---------------------------------------------------------

function createDate(columnString) {
	const bits = columnString.split('-');
	return new Date(bits[0], bits[1], bits[2], bits[3]);
}

function daysSinceLaunch(d) {
	const launch = new Date(2023, 0, 26, 23);
	return ( d.getTime() - launch.getTime() ) / (24*60*60*1000);
}

function dateFromLaunch(d) {
// inverse of daysSinceLaunch
	const msecSinceLaunch = d*1000*60*60*24;
	const launch = new Date(2023, 0, 26, 23);
	const day = new Date(launch.getTime() + msecSinceLaunch);	
	return `${day.getMonth()+1}-${day.getDate()}`;
}


function filterInfo(data, x) {
	const dx = data.length / x;
	const shorterArray = [];
	for (i = 0; i < x; i++) {
		const index = Math.floor(i*dx);
		shorterArray.push(data[index]);
	}
	return shorterArray;
}

function createNamePlate(myMan){
	const plate = document.createElement('div');
	plate.setAttribute('class', 'name-plate');
	const name = document.createElement('div');
	name.setAttribute('class', 'name');
	name.innerHTML = `${myMan.first_name} ${myMan.last_name}`
	const followers = document.createElement('div');
	followers.setAttribute('class', 'followers');
	followers.innerHTML = `${myMan.current_count} followers (1st)`;
	const handle = document.createElement('a');
	handle.setAttribute('class', 'handle');
	handle.innerHTML = myMan.twitter_name;
	handle.href = 'https://twitter.com/' + myMan.twitter_name;
	handle.setAttribute('target', '_blank');
	plate.appendChild(name);
	plate.appendChild(followers);
	plate.appendChild(handle);
	return plate;
}

async function show(x){
	console.log(x);
	return 1;
}

async function cleanRecord(row) {
	const rec = row[0];
	const unNeededColumns = [
		'id', 'first_name', 'last_name',
		'twitter_name', 'current_count'
	];
	const data = [];
	for (const property in rec) {
		if (!unNeededColumns.includes(property)) {
			data.push({
				x: daysSinceLaunch(createDate(property)),
				y: rec[property]
			});
		}
	}
	const player = {
		id: rec.id,
		first_name: rec.first_name,
		last_name: rec.last_name,
		twitter_name: rec.twitter_name,
		current_count: rec.current_count
	}
	return {bio: player, info: data};
}

async function createGraph(myMan) {
	
	const record = await fetch(`/id/${myMan.id}`, {
    	method: 'GET',
    	headers: {
        	'Accept': 'application/json',
   		},
	})
	.then(response => response.json())
	.then(cleanRecord);

	graph = document.createElement('canvas');
	console.log(record.bio);
	new Chart(
		graph,
		{
			type: 'line',
			options: {
				scales: {
					x: {
						type: 'linear',
						ticks: {
							callback: function(value, index, ticks){
								return dateFromLaunch(value);
							}
						}
					}
				}
			},
			data: {
				datasets: [{
					//label: record.bio.twitter_name,
					label: record.bio.twitter_name,
					data: filterInfo(record.info, 40)
				}]
			}
		}
	);
	console.log(graph);
	return graph;
}

async function loadPlayer(player) {
	if (list.includes(player)) return;
	list.push(player);

	const newNode = document.createElement('div');
	newNode.setAttribute('class', 'card');
	
	const namePlate = createNamePlate(player);
	newNode.appendChild(namePlate);

	const chart = await createGraph(player);
	const graphWrapper = document.createElement('div');
	graphWrapper.setAttribute('class', 'wrapper');
	graphWrapper.appendChild(graph);
	newNode.appendChild(graphWrapper);

	stage.appendChild(newNode);
	listNodes.push(newNode);
}

function removePlayer(player) {
	for (i = 0; i < list.length; i++) {
		if (list[i].id == player.id) {
			list.splice(i, 1);
			listNodes[i].remove();
			listNodes.splice(i, 1);
			records.splice(i, 1);
		}
	}
}


//---------------------------------------------------------
//--------  load master list of players -------------------
//---- in order of twitter followers (descending) ---------

let masterList = [];
const masterListRequest = new XMLHttpRequest();

masterListRequest.onload = function() {
	const tempList = JSON.parse(masterListRequest.response);
	tempList.forEach(x => {
		const y = Object.assign( {}, x);
		masterList.push( y );
	});
	console.log(masterList);
}

masterListRequest.open('GET', 'master', false);
masterListRequest.send();

//---------------------------------------------------------
//-- create list of players. Display toggled by clicking --
//---------------------------------------------------------

fullList.id = 'full-list';
masterList.forEach( rec => {
	const temp = document.createElement('li')
	temp.innerHTML = `${rec.first_name} ${rec.last_name}: ${rec.current_count}`;
	fullList.appendChild(temp);
});
fullList.style.display = 'none';
stage.appendChild(fullList);


//---------------------------------------------------------
//-------- manage stage list ------------------------------



listAll.addEventListener('click', () => {
	console.log('list all');
	console.log(fullList.style.display);
	if (fullList.style.display == 'none')
		fullList.style.display = 'block';
	else
		fullList.style.display = 'none';
});

add.addEventListener('click', () => {
	const names = prompt('add who?').split(' ');
	masterList.forEach( p => {
		if ( (p.first_name.toUpperCase() == names[0].toUpperCase()) 
			&& (p.last_name.toUpperCase() == names[1].toUpperCase()) ) {
			loadPlayer(p)
		}
	});
});

remove.addEventListener('click', () => {
	const names = prompt('remove who?').split(' ');
	for (i = 0; i < list.length; i++) {
		if ((list[i].first_name.toUpperCase() == names[0].toUpperCase())
		 && (list[i].last_name.toUpperCase() == names[1].toUpperCase())) {
			removePlayer(list[i]);
		}
	}
});

clear.addEventListener('click', () => {
	const max = list.length;
	for (i = max-1; i >= 0; i--) {
		listNodes[i].remove();
		list.pop();
		records.pop();
		listNodes.pop();
	}
});
