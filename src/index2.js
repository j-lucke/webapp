import Chart from 'chart.js/auto'

//---------------------------------------------------------
//----------  HTML elements -------------------------------
//---------------------------------------------------------

const add = document.getElementById('add')
const clear = document.getElementById('clear')
const stage = document.getElementById('stage')
const namesList = document.createElement('ul')
namesList.setAttribute('class', 'drop-down')

//---------------------------------------------------------
//------------ global variables ---------------------------
//---------------------------------------------------------

let i;   //loop counter.  don't ask, cause i don't get it
let masterList = [];
let alphaList = [];    

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

	const xbox = document.createElement('a');
	xbox.setAttribute('class', 'xbox');
	xbox.id = 'xbox-' + myMan.id;
	xbox.innerHTML = 'X';
	plate.appendChild(xbox);


	const name = document.createElement('div');
	name.setAttribute('class', 'name');
	name.innerHTML = `${myMan.first_name} ${myMan.last_name}`;

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

async function createFollowersGraph(myMan) {
	
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
					label: 'followers',
					data: filterInfo(record.info, 40)
				}]
			}
		}
	);
	return graph;
}

async function createMentionsGraph(myMan) {
	const record = await fetch(`/mentions/id/${myMan.id}`, {
    	method: 'GET',
    	headers: {
        	'Accept': 'application/json',
   		},
	})
	.then(response => response.json());

	const weeklyData = JSON.parse(record.twitter_report)
	console.log(weeklyData.data.map( x => x.tweet_count))

	const graph = document.createElement('canvas')
	new Chart(
		graph,
		{
			type: 'bar',
			data: {
				labels: weeklyData.data.map(x => x.start.split('T')[0].substring(5)),
				datasets: [{
					label: 'mentions over last week',
					data: weeklyData.data.map( x => x.tweet_count)
				}]
			}
		}
	);
	return graph;
}

async function loadPlayer(playerId) {
	const index =  masterList.findIndex( x => x.id == playerId);
	const player = masterList[index];

	const cardsOnDisplay = document.querySelectorAll('.cards');
	cardsOnDisplay.forEach( card => {
		if (card.id == 'card-' + player.id)
			return;
	});

	const newNode = document.createElement('div');
	newNode.setAttribute('class', 'card');
	newNode.id = 'card-' + player.id;

	
	
	const namePlate = createNamePlate(player);
	newNode.appendChild(namePlate);

	const graphStage = document.createElement('div');
	graphStage.setAttribute('class', 'graph-stage');
	newNode.appendChild(graphStage);

	const chart1 = await createFollowersGraph(player);
	const graphWrapper = document.createElement('div');
	graphWrapper.setAttribute('class', 'wrapper');
	graphWrapper.appendChild(chart1);
	graphStage.appendChild(graphWrapper);

	const chart2 = await createMentionsGraph(player);
	const gwrap = document.createElement('div')
	gwrap.setAttribute('class', 'wrapper')
	gwrap.appendChild(chart2)
	graphStage.appendChild(gwrap)

	stage.appendChild(newNode);
}

function removePlayer(playerId) {
	const cardsOnDisplay = document.querySelectorAll('.card');
	cardsOnDisplay.forEach( card => {
		if (card.id == 'card-' + playerId) {
			card.remove();
		}
	});
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
		temp.setAttribute('class', 'list-name')
		temp.innerHTML = `${x.first_name} ${x.last_name}`;
		temp.id = 'list-name-' + x.id;
		namesList.appendChild(temp);
	});
	namesList.style.display = 'none';
	add.appendChild(namesList);
}

masterListRequest.open('GET', 'master', false);
masterListRequest.send();

//---------------------------------------------------------
//------------ manage stage  ------------------------------
//---------------------------------------------------------


add.addEventListener('click', () => {
	if (namesList.style.display == 'none')
		namesList.style.display = 'block'
	else
		namesList.style.display = 'none';
});

clear.addEventListener('click', () => {
	const cardsOnDisplay = document.querySelectorAll('.card');
	cardsOnDisplay.forEach( card => card.remove() );
});

namesList.addEventListener('click', (e) => {
	const player_id = e.target.id.split('-')[2];
	loadPlayer(player_id);
});

stage.addEventListener('click', (e) => {
	const player_id = e.target.id.split('-')[1];
	removePlayer(player_id);
});
