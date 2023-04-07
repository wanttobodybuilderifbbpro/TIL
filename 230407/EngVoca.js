let myVoca = {
  //여기에 코드 입력
  function: '함수',
  variable: '변수',    //객체 안에 여러개의 프로퍼터들은 쉼포(,)로 구분해야 합니다.
  constant: '상수',    //실제 탬플릿을 보면, 영어 단어가 key가 된다는 걸 힌트로 알 수 있고
  local: '지역의',     // 영어단어 : 뜻 모양을 갖추며 쉼표로 구분하면 이렇게 코드가 나옵니다. 
  global: '전반적인',
};

console.log(myVoca);
console.log(myVoca.local);
console.log(myVoca.constant);
console.log(myVoca.function);