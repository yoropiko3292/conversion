
//変数リスト
//beforeS 10進数の数字の場所 #let
//beforeN 10進数の数字 #let
//afterS 何進数にするかの場所 #let
//afterN 何進数にするか #let
//afterL 結果 #let
//afterM 結果のメモ #let
//a メモ
//memo 進数のメモ #let
//counter 桁数のメモ #let
//letUsGo 実行ボタンの場所 #const
//result  結果表示の場所 #const
//nbr 数列 #const
//その他はメモ
//変数リスト終了

let beforeS;
let beforeN;
let afterS;
let afterN;
let afterL;
let afterM;
let i;
let a;
let memo;
let memoTw;
let memoTh;
let memoF;
let counter;
const letUsGo = document.getElementById("letUsGo");
const letUG = document.getElementById("letUG");
const resurt = document.getElementById("result");
const res = document.getElementById("res");
const nbr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


letUsGo.addEventListener("click",function() {
 afterL = "";
 afterM = 0;
 i = 1;
 beforeS = document.getElementById("beforeNumber");
 beforeN = beforeS.value;
 memo = parseFloat(beforeN);
 beforeN = memo + 1;
 afterS = document.getElementById("n");
 afterN = afterS.value;
 memo = parseFloat(afterN);
 afterN = memo;
 if (beforeN > 0 && afterN > 0 && beforeN % 1 === 0 && afterN % 1 === 0 && afterN <= 36) {
  memo = afterN;
  counter = 1;
  while(beforeN >= memo){
   counter += 1;
   memo *= afterN;
  }
  beforeN -= 1;
  while(i <= counter){
   memo /= afterN;
   a = beforeN / memo;
   afterM = Math.floor(a);
   afterL += nbr[afterM];
   afterM = parseFloat(afterL);
   a = beforeN;
   beforeN = a % memo;
   i += 1;
  }
 }else{
  alert("無効な値が入力されています")
 }
 afterM = afterL;
 afterL = String(afterM);
 resurt.textContent = "結果【" + afterL + "】";
})

letUG.addEventListener("click",function() {
 afterL = 0;
 afterM = 0;
 i = 1;
 beforeS = document.getElementById("beforeNbr");
 beforeN = beforeS.value;
 beforeS = beforeN;
 memoTw = beforeN.length;
 memo = parseFloat(beforeN);
 beforeN = memo + 1;
 afterS = document.getElementById("number");
 afterN = afterS.value;
 memo = parseFloat(afterN);
 afterN = memo;
 memo = 1;
 while(i <= memoTw){
  memoTh = beforeS.charAt(memoTw - i);
  memoF = nbr.indexOf(memoTh);
  if(memoF > -1 && memoF <= afterN && afterN % 1 === 0 &&  afterN > 1 && afterN <= 36) {
   afterL += memoF * memo;
   memo *= afterN;
  }else{
   alert("無効な値が入力されています");
   i = memoTw + 1;
   afterL = "";
  }
  i += 1;
 }
 res.textContent = "結果【" + afterL + "】";
})
