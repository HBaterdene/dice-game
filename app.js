// togloom duussan eseh shalgah
var isNewGame = true;
//  Тоглогчын ээлжийг хадгалах хувьсагч,  нэгдүгэр тоглогчийг 0, хоёрдугаар тоглогчыг 1 гэж тэмдэглэе
var activePlayer = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадглах хувьсагч
var roundScore = 0;

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// shine togloom ehlvvleh towchnii event listener
document.querySelector(".btn-new").addEventListener("click", function () {
  isNewGame = true;
  //  Тоглогчын ээлжийг хадгалах хувьсагч,  нэгдүгэр тоглогчийг 0, хоёрдугаар тоглогчыг 1 гэж тэмдэглэе
  activePlayer = 0;
  // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];
  //Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадглах хувьсагч
  roundScore = 0;

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  diceDom = document.querySelector(".dice");
  diceDom.style.display = "none";
  //toglogchiin neriig butsaaj gargah
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
});
// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    //1-6 dotorh sanamsargvi neg too gargaj  avna.
    var diceNumber = Math.floor(Math.random() * 6 + 1);

    // shoonii zurgiig web deer gargah
    diceDom.style.display = "block";
    // sanamsargvi toond tohirsin shoonii zurgiig web deer gargaj irne.
    diceDom.src = "dice-" + diceNumber + ".png";
    // toglogchiin eeljiin onoog oorchilno.
    // buuusan too ni 1 eees ylgaatai idewhtei toglogchiin eeljiin onoog nemegdvvlne.
    if (diceNumber !== 1) {
      //1ees ylgaatai too buulaa buusan toog toglogchid nemj ogno.
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      switchToNextPlayer();
    }
  }
});

// hold towchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // ug toglogchiin cugluulsan eeljiiin onoog global onoon dotor nemj ogno
    scores[activePlayer] = scores[activePlayer] + roundScore;
    //delgetsen deer onoog oorchilno.
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      document.getElementById("name-" + activePlayer).textContent = "Winner!";
      isNewGame = false;
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document.querySelector(".player-1-panel").classList.remove("active");
      document.querySelector(".player-0-panel").classList.remove("active");
    } else {
      // toglogchdiin eeljiiig solino.
      switchToNextPlayer();
    }
  }
});
// toglogchiin eljiig shiljvvlne
function switchToNextPlayer() {
  // toglogchiin onoog teglene.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  //ulaan tsegiig huraana
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");
  // 1buulaa toglogchiin eeljiig ene heseg solij ogno.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // ulaan tsegiig shiljvvleh

  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");
  // shoog tvr alga bolgono
  diceDom.style.display = "none";
}
