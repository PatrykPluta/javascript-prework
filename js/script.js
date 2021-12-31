function getMoveName(numberChoice) {
  if(numberChoice == 1) return 'kamień';
  if(numberChoice == 2) return 'papier';
  if(numberChoice == 3) return 'nożyce'
  return 'nieznany ruch'
}

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Komputer zagrał ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ja wygrywam!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Wygrywa komputer!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ja wygrywam!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Wygrywa komputer!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Wygrywa komputer!');
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

// PROCES GRY

// losujemy wybór komputer
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);

// ustalamy wybór gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput)

// wyświetlenie wyborów racza i komputera w HTML-u
printMessage('Ruch gracza to: ' + playerMove);
printMessage('Ruch komputera to: ' + computerMove);

// ustalamy zwycięzce
displayResult(computerMove, playerMove)
