//Using parameter height, make the function "CheckHeight"
function checkHeight(hegiht){
  //note codes to this part.
  const LIMIT = 140;
  let passMessage = '탑승이 가능합니다.';
  let failMessage = '탑승이 불가능합니다.';

  if(height >= 140){
    console.log(passMessage);
  } else{
    console.log(failMessage);
  }
}

//test codes
checkHeight(140);
checkHeight(135);
checkHeight(170);