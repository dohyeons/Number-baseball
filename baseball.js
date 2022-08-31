const answerNum = document.querySelector("#answerNumber");
const answerInput = document.querySelector("#answerInput");
const inputNum = document.querySelector("#answerInput input");
const btn = document.querySelector("#answerInput button");
const pastTry = document.querySelector("#pastTryContainer");
const pastAnswer = document.querySelectorAll("#pastTryContainer div")
const randomNumBtn = document.querySelector(".container button");
const numberCreated = document.querySelector("#numberCreated");

let count = 0; // count가 10이 되면 사용자의 패배임
let strike = 0; // 표시할 스트라이크;
let ball = 0; // 표시할 볼;
let 

function answerMaker() { // 난수 생성 함수
    // 난수를 생성해서 number에 요소 하나하나로 넣어줌
    // 넣어준 요소를 하나하나 answer에도 더해줌
    let number=[];
    let answer = "";
    number[0] = Math.floor(Math.random() * 10);
    do {
      number[1] = Math.floor(Math.random() * 10);
    } while (number[1] === number[0]);
    do {
      number[2] = Math.floor(Math.random() * 10);
    } while (number[2] === number[0] || number[2] === number[1]);

    for(let el of number) {
        answer = answer + el
    }
    // let i = 0;
    // while (i < 3) {
    // answer = answer + Math.floor(Math.random() * 10);
    // i++;
    // }
    answerNum.innerText = answer;
    numberCreated.classList.remove('hidden')
}

randomNumBtn.addEventListener('click',  answerMaker); // 난수 생성

function handleSubmit(event) {
    // 정답 입력 버튼 함수
    // input에 적은 숫자를 밑에 쭉 나열
    // 숫자를 입력받아 문자열로 변환해줌
    event.preventDefault(); // 버튼 클릭하면 초기화되는거 방지
    const stringNum = String(inputNum.value); // input에 입력한 값을 문자열로 전환해줌
    const past = document.createElement("div"); // 과거 시도를 담을 div요소 생성
    past.innerText = stringNum; //div 의 컨텐츠로 과거 시도를 넣어줌
    pastTry.appendChild(past); // 자식 요소로 연결
    inputNum.value=''; // 입력칸 다시 초기화

    // includes는 true지만 indexOf가 다르다면 ball
    // includes도 true고 answer.indexOf와 stringNum.indexOf가 같다면 strike
    // 아니라면 foul
    
}
answerInput.addEventListener("submit", handleSubmit); // 답 입력

if(pastAnswer.value) {

}


