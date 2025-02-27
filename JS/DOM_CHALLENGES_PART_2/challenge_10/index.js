// const emojis = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"];
// let cards = [...emojis, ...emojis];
// let flippedCards = [];
// let matchedPairs = 0;
// let moves = 0;
// let timer;
// let timeElapsed = 0;
// let gameStarted = false;

// document.addEventListener("DOMContentLoaded", () => {
//   shuffleCards();
//   generateBoard();
//   updateStats();
// });

// function shuffleCards() {
//   cards.sort(() => Math.random() - 0.5);
// }

// function generateBoard() {
//   const gameContainer = document.getElementById("gameContainer");
//   gameContainer.innerHTML = "";
  
//   cards.forEach((emoji, index) => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.dataset.emoji = emoji;
//     card.dataset.index = index;
    
//     const cardFront = document.createElement("div");
//     cardFront.classList.add("card-front");
//     cardFront.textContent = emoji;
    
//     const cardBack = document.createElement("div");
//     cardBack.classList.add("card-back");
//     cardBack.textContent = "❓";
    
//     card.appendChild(cardFront);
//     card.appendChild(cardBack);
    
//     card.addEventListener("click", () => flipCard(card));
//     gameContainer.appendChild(card);
//   });
// }

// function flipCard(card) {
//   if (!gameStarted) {
//     startTimer();
//     gameStarted = true;
//   }

//   if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
//     card.classList.add("flipped");
//     flippedCards.push(card);
//   }

//   if (flippedCards.length === 2) {
//     moves++;
//     updateStats();
//     checkMatch();
//   }
// }

// function checkMatch() {
//   const [card1, card2] = flippedCards;
//   if (card1.dataset.emoji === card2.dataset.emoji) {
//     matchedPairs++;
//     flippedCards = [];
//     if (matchedPairs === emojis.length) {
//       clearInterval(timer);
//       setTimeout(() => alert(`You won in ${moves} moves and ${formatTime(timeElapsed)}!`), 300);
//     }
//   } else {
//     setTimeout(() => {
//       card1.classList.remove("flipped");
//       card2.classList.remove("flipped");
//       flippedCards = [];
//     }, 1000);
//   }
// }

// function startTimer() {
//   timer = setInterval(() => {
//     timeElapsed++;
//     updateStats();
//   }, 1000);
// }

// function updateStats() {
//   document.getElementById("moves").textContent = moves;
//   document.getElementById("time").textContent = formatTime(timeElapsed);
// }

// function formatTime(seconds) {
//   const minutes = Math.floor(seconds / 60);
//   const secs = seconds % 60;
//   return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
// }

// function restartGame() {
//   clearInterval(timer);
//   timeElapsed = 0;
//   moves = 0;
//   matchedPairs = 0;
//   flippedCards = [];
//   gameStarted = false;
//   shuffleCards();
//   generateBoard();
//   updateStats();
// }



const arr = ["🐶", "🐱", "🐰", "🐵", "🐶", "🐱", "🐰", "🐵", "🐸", "🐼", "🦁", "🦊", "🐸", "🐼", "🦁", "🦊"];
arr.sort(() => Math.random() - 0.5);



const container = document.getElementById("gameContainer");
for (let i = 0; i < 16; i++) {

  const div1 = document.createElement("div");

  div1.className = "card";
  div1.innerHTML = `
  <div class="card-front"> ?</div>
  <div class="card-back" id="emoji">${arr[i ]}</div>
  `;
  container.appendChild(div1);
  // console.log(container);
}

const options={
  i:"2 digit"
}

let flip = 0;
let card1, card2;
let emoji1, emoji2;
let moves = 0;
let i = 0;
let j = 1;
let k = 0;

function timer() {
  setInterval(() => {
    if (j % 60 == 0) {
      i++;
      j = 0;
    }
    document.getElementById(
      "time"
    ).textContent = `${i} : ${j.toString().padStart(2, '0')}`;
    j += 1;
  }, 1000);
}


let isChecking = false;

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", (e) => {
    if (k == 0) {
      timer();
      k = 1;
    }
    if (isChecking) return;
    if (!card.classList.contains("flipped")) {
      card.classList.toggle("flipped");
      if (flip == 0) {
        emoji1 = card.querySelector(".card-back").textContent.trim();
        card1 = e.target.closest(".card");
        flip++;

        console.log(emoji1);
      } else if (flip === 1 && card !== card1) {
        emoji2 = card.querySelector(".card-back").textContent.trim();
        card2 = e.target.closest(".card");
        console.log(card2);
        console.log(emoji2);
        flip++;
        if (emoji1 !== emoji2) {
          isChecking = true;
          setTimeout(() => {
            card1.classList.toggle("flipped");
            card2.classList.toggle("flipped");
            flip = 0;
            isChecking = false;
          }, 800);
        } else {
          moves++;
          flip = 0;
        }
      }
      console.log(moves);
      document.getElementById("moves").innerText = `${moves}`;
      if (moves === 8) {
        setTimeout(()=>{

          alert("Game completed");
          restartGame();
        },1000)
      }
    }
  });
});

function restartGame() {
  window.location.reload();
}