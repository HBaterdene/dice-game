//  Тоглогчын ээлжийг хадгалах хувьсагч,  нэгдүгэр тоглогчийг 0, хоёрдугаар тоглогчыг 1 гэж тэмдэглэе
var activePlayer = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадглах хувьсагч
var roundScore = 0;
//Шоо аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6 + 1);

//<div class="player-score" id="score-0">43</div>

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6 + 1);
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
