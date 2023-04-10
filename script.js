
    // Algorithm
    let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };


      upDateScoreElement();

      /*
    if (!score) {
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      }
    }*/
    const playGame = (playerMove) => {
      const computerMove = pickComputerMove();
     /* const score = {
        wins: 0,
        losses: 0,
        ties: 0
      }; */

        result  = '';
        if (playerMove === 'scissors') {
              if(computerMove === 'rock') {
            result = 'you lose';
          } else if (computerMove === 'paper') {
            result = 'you win';
          } else  {
            result = 'tie';
          }
          


        } else if(playerMove === 'paper') {
          if(computerMove === 'rock') {
            result = 'you win'; 
          } else if(computerMove === 'paper') {
            result = 'tie';
          } else  {
            result = 'you lose';
          }


        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'you tie';
          } else if(computerMove === 'paper') {
            result = 'you lose';
          } else {
            result = 'you win';
          }
        }

        if (result === 'you win') {
          score.wins += 1;
        } else if (result === 'you lose') {
          score.losses += 1;
        } else if (result === 'tie') {
          score.ties += 1;
        }
        localStorage.setItem('score', JSON.stringify(score));

        upDateScoreElement();

        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-move').innerHTML = ` You
        <img src="${playerMove}-emoji.png" class="fa" />
         <img src="${computerMove}-emoji.png" class="fa" />
    Computer`;
     
     
    }

    function upDateScoreElement() {
      document.querySelector('.js-class').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
    }
 

    

    const pickComputerMove = () => {
const randomNumber = Math.random();

      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'Paper';
      } else if(randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'Scissors';
      }
      return computerMove;

    }
  
