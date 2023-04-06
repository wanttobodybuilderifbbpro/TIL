//Fibonacci Sequence

let current = 1;
let previous = 0;

// for(let i = 1; i <= 50; i++){
//   console.log(current);
//   let tmp = previous;
//   previous = current;
//   current = current + tmp;     ctrl + /  = 전체주석 단축키 알아두기. 
// }

//while 문

let i = 1;
while(i <= 50){
  console.log(current);
  let temp = previous;
  previous = current;
  current = current + temp;
  i++; //i가 계속 증가되서 50에서 마치고 51에서 끝나야 하기 때문에. 
}
