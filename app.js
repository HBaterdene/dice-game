//  Тоглогчын ээлжийг хадгалах хувьсагч,  нэгдүгэр тоглогчийг 0, хоёрдугаар тоглогчыг 1 гэж тэмдэглэе
var activePlayer = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадглах хувьсагч
var roundScore = 0;
//Шоо аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
//var diceNumber = Math.floor(Math.random() * 6 + 1);

//<div class="player-score" id="score-0">43</div>

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
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
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
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
    diceDom.style.display = none;
  }
});
