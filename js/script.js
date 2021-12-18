let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}
  function getMoveName(argMoveId){
    if(argMoveId == 2){
      return 'papier';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }
  function getMoveName(argMoveId){
    if(argMoveId == 3){
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
  printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
  printMessage('Remis!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
  printMessage('Ja wygrywam!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
  printMessage('Remis!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
  printMessage('Ja wygrywam!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
  printMessage('Ja wygrywam!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
  printMessage('Remis!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
  printMessage('Błąd!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
  printMessage('Błąd!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
  printMessage('Błąd!');
}
}



/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
  computerMove = 'papier';
} else {(randomNumber == 3)
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + argComputerMove);
*/
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = 'nieznany ruch';

if(playerInput == '1'){
  argPlayerMove = 'kamień';
} else if (playerInput == '2'){
  argPlayerMove = 'papier';
} else {(playerInput == '3')
argPlayerMove = 'nożyce';
}
/*
printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
  } else if (computerMove == 'kamień' && playerMove == 'kamień'){
	printMessage('Remis!');
  } else if (computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Ja wygrywam!');
  } else if (computerMove == 'papier' && playerMove == 'papier'){
	printMessage('Remis!');
  } else if (computerMove == 'papier' && playerMove == 'nożyce'){
	printMessage('Ty wygrywasz!');
  } else if (computerMove == 'papier' && playerMove == 'kamień'){
	printMessage('Ja wygrywam!');
  } else if (computerMove == 'nożyce' && playerMove == 'papier'){
	printMessage('Ja wygrywam!');
  } else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
	printMessage('Remis!');
  } else if (computerMove == 'nożyce' && playerMove == 'kamień'){
	printMessage('Ty wygrywasz!');
  } else if (computerMove == 'kamień' && playerMove == 'nieznany ruch'){
	printMessage('Błąd!');
  } else if (computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
	printMessage('Błąd!');
  } else if (computerMove == 'papier' && playerMove == 'nieznany ruch'){
	printMessage('Błąd!');
  }*/