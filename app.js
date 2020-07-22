const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error! You need to pick a valid option!');
    }
  };
  
  const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
  
    switch (computerChoice) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won';
      } else {
        return 'You won!';
      }
    } else if (userChoice === 'bomb') {
      return 'OMG! You blew everything up! You win!';
    }
  };
  
  const playGame = () => {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
  
    console.log(userChoice, computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  