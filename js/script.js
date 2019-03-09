function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

var playerMove;
playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');



//var randomNumber;
//randomNumber = Math.floor(Math.random() * 3 + 1);
//printMessage('Wylosowana liczba to: ' + randomNumber);

//randomNumber = Math.floor(Math.random() * 9 + 11);
//printMessage('Wylosowana liczba to: ' + randomNumber);


var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
  computerMove = 'papier';
} else {
	computerMove = 'nożyce';
}
printMessage('Mój ruch: ' + computerMove);
