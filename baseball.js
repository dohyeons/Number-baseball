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
let out = 0; // 아웃 카운트가 9가되면 아웃 표시
let number=[]; // 난수를 저장할 배열;

function answerMaker() { // 난수 생성 함수
    // 난수를 생성해서 number에 요소 하나하나로 넣어줌
    // 넣어준 요소를 하나하나 answer에도 더해줌 <-- 사실 난수를 보여줄 필요는 없으므로 이 부분을 수정. answer 삭제
    
    number[0] = Math.floor(Math.random() * 10);
    do {
      number[1] = Math.floor(Math.random() * 10);
    } while (number[1] === number[0]);
    do {
      number[2] = Math.floor(Math.random() * 10);
    } while (number[2] === number[0] || number[2] === number[1]);
    console.log(number);
    numberCreated.classList.remove('hidden'); // 안내메시지를 보이게끔
    randomNumBtn.disabled = true; //난수를 한 번 생각하면 버튼을 비활성화.
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
    pastTry.appendChild(past); // 위에서 생성한 요소를 자식 요소로 연결
    inputNum.value=''; // 입력칸 다시 초기화
    let inputArr = []; // number와 입력 숫자를 비교하기 위한 배열
    count++; // 시도 횟수를 증가시킴
    strike = 0;
    ball = 0; // 스트라이크가 한꺼번에 나오지 않는 이상 게임을 이긴 것이 아니므로 볼과 스트라이크를 초기화. 
    for(let i = 0; i < number.length ; i ++) {
      inputArr[i] = Number(stringNum[i]); // number와 inputArr를 비교하기 위해서 inputArr에 입력값들을 요소로 하나하나 넣어줌
    } 
    for(let n=0; n<3 ; n ++) {
      for(let i = 0; i <3 ; i ++) {
        if(number[n] === inputArr[i]) {
          if(n === i) {
            strike ++;
          } else {ball ++;}
          break;
        } else {
          out ++;
        }
      }
    }
    console.log(`strike: ${strike}, ball: ${ball}, 시도횟수: ${count}`)
    if (strike === 3) {
      console.log(`${count}번 만에 성공했습니다!`);
      btn.disabled = true;
    }
    if (count === 10) {
      console.log("다음에 다시 시도하세요!");
      btn.disabled = true;
    }

}


answerInput.addEventListener("submit", handleSubmit); // 답 입력



