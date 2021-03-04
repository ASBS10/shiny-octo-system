var AnsSentence=document.getElementById("Question").innerHTML;
    var Sentence=document.getElementById("Answer").innerHTML;

function Home(){
    window.location="index.html";
}
function Music(){
    window.location="index2.html";
}
function Leaderboard(){
    window.location="index3.html";
}
function Credits(){
    window.location="index4.html";
}
function Connections(){
    window.location="index5.html";
}
 
function Check(){
    score=document.getElementById("Score").innerHTML;
    console.log("hello there");
    if (AnsSentence == Sentence){
       score = score+1;
        console.log(score);
        document.getElementById("Score").innerHTML = "";
        document.getElementById("Score").innerHTML = score;
        if (score == 01){
            score=1;
            document.getElementById("Score").innerHTML = score;
        }
        if (score == 11){
            score=2;
            document.getElementById("Score").innerHTML = score;
                    }
        if (score == 21){
            score=3;
            document.getElementById("Score").innerHTML = score;
        }
        if (score == 31){
            score=4;
            document.getElementById("Score").innerHTML = score;
        }
        if (score == 41){
            score=5;
            document.getElementById("Score").innerHTML = score;
        }
        if (score == 51){
            score=6;
            document.getElementById("Score").innerHTML = score;
        }
        if (score == 61){
            score=7;
            document.getElementById("Score").innerHTML = score;
        }
        if (score == 71){
            score=8;
            document.getElementById("Score").innerHTML = score;
        }
        if (score == 81){
            score=9;
            document.getElementById("Score").innerHTML = score;
        }
        if (score == 91){
            score=10;
            document.getElementById("Score").innerHTML = score;
        }
if (score == 10){
    window.location="index.html";
}
    }
}
