import Chart from 'chart.js/auto'

//---------------------------------------------------------
//----------  HTML elements -------------------------------
//---------------------------------------------------------

const add = document.getElementById('add');
const clear = document.getElementById('clear');
const listAll = document.getElementById('list-all');
const stage = document.getElementById('stage');
const fullList = document.createElement('ol');
const namesList = document.createElement('ul');


//---------------------------------------------------------
//------------ global variables ---------------------------
//---------------------------------------------------------

let i;                 // for loops in eventListeners
let list = [];		   // players on display
let listNodes = [];	   // html elements. corresponds to list	
let masterList = [];   // list is a subset of masterList
let alphaList = [];    // alphabetical, excludes null
let names = [];        // html nodes for namesList

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
	const index = masterList.findIndex(x => x.id == myMan.id);
	followers.innerHTML = `${myMan.current_count} followers (${printOrdinal(index+1)})`;
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

	const graph = document.createElement('canvas');
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
	return graph;
}

async function loadPlayer(player) {
	if (list.includes(player)) return;
	list.push(player);

	const newNode = document.createElement('div');
	newNode.setAttribute('class', 'card');

	const xbox = document.createElement('a');
	xbox.setAttribute('class', 'xbox');
	xbox.id = player.id;
	xbox.innerHTML = 'X';
	newNode.appendChild(xbox);
	
	const namePlate = createNamePlate(player);
	newNode.appendChild(namePlate);

	const chart = await createGraph(player);
	const graphWrapper = document.createElement('div');
	graphWrapper.setAttribute('class', 'wrapper');
	graphWrapper.appendChild(chart);
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
		}
	}
}

function printOrdinal(x){
	let suffix = 'th';
	switch (x % 10) {
		case 1: suffix = 'st'; break;
		case 2: suffix = 'nd'; break;
		case 3: suffix = 'rd'; break;
	}
	return x + suffix;
}

//---------------------------------------------------------
//--------  load master list of players -------------------
//---- in order of twitter followers (descending) ---------
//---------and populate alphaList of not-null -------------
//---------------------------------------------------------

const masterListRequest = new XMLHttpRequest();
masterListRequest.onload = function() {
	const tempList = JSON.parse(masterListRequest.response);
	tempList.forEach(x => {
		const y = Object.assign( {}, x);
		masterList.push( y );
	});
	masterList.forEach( x => {
		if (x.twitter_name != null) 
			alphaList.push(x) 
	});
	alphaList.sort((a,b) => {
		if (a.last_name.toUpperCase() < b.last_name.toUpperCase())
			return -1;
		else
			return 1;
	})
	let listNum = 0;
	alphaList.forEach(x => {
		const temp = document.createElement('li');
		temp.innerHTML = `${x.first_name} ${x.last_name}`;
		temp.id = listNum++;
		names.push(temp);
		namesList.appendChild(temp);
	});
	namesList.style.display = 'none';
	add.appendChild(namesList);
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
//---------------------------------------------------------

let namesShowing = false;

listAll.addEventListener('click', () => {
	if (fullList.style.display == 'none')
		fullList.style.display = 'block';
	else
		fullList.style.display = 'none';
});

/*
add.addEventListener('click', () => {
	const names = prompt('add who?').split(' ');
	masterList.forEach( p => {
		if ( (p.first_name.toUpperCase() == names[0].toUpperCase()) 
			&& (p.last_name.toUpperCase() == names[1].toUpperCase()) ) {
			loadPlayer(p)
		}
	});
});
*/

add.addEventListener('click', () => {
	console.log('add');
	if (!namesShowing) {
		namesShowing = true;
		namesList.style.display = 'block';
	}
	else{
		namesShowing = false;
		namesList.style.display = 'none';
	}
});

clear.addEventListener('click', () => {
	const max = list.length;
	for (i = max-1; i >= 0; i--) {
		listNodes[i].remove();
		list.pop();
		listNodes.pop();
	}
});

namesList.addEventListener('click', (e) => {
	console.log(e.target);
	console.log(alphaList[e.target.id]);

	loadPlayer(alphaList[e.target.id]);
	needReset = true;
});

stage.addEventListener('click', (e) => {
	console.log('stage click');
	console.log(e.target.id);
	const index = list.findIndex( x => x.id == e.target.id);
	removePlayer(list[index]);
});
