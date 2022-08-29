const answerNum = document.querySelector("#answerNumber");
const answerInput = document.querySelector("#answerInput");
const inputNum = document.querySelector("#answerInput input");
const btn = document.querySelector("#answerInput button");
const pastTry = document.querySelector("#pastTry");
const randomNumBtn = document.querySelector(".container button");


function answerMaker() {
    let answer = "";
    let i = 0;
    while (i < 3) {
    answer = answer + Math.floor(Math.random() * 10);
    i++;
    }
    answerNum.innerText = answer;
}
function handleSubmit(event) {
    // input에 적은 숫자를 밑에 쭉 나열
    // 숫자를 입력받아 문자열로 변환해줌
    // includes는 true지만 indexOf가 다르다면 ball
    // includes도 true고 answer.indexOf와 stringNum.indexOf가 같다면 strike
    // 아니라면 foul
    event.preventDefault();
    const stringNum = String(inputNum.value);
    const past = document.createElement("h2");
    past.innerText = stringNum;
    pastTry.appendChild(past);
    inputNum.value='';
}


answerInput.addEventListener("submit", handleSubmit);


randomNumBtn.addEventListener('click',  answerMaker)
