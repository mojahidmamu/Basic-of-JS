// Condition 
// // if-else 
// var isRaining = false;

// if(isRaining === true){
//   console.log( 'will not go ');
// }else{
//   console.log( 'will go' );
// }
// condition ? if true : if false
// isRaining === true ? console.log('will not go ') : console.log('will go' )


// var money = 100;
// var isRaining = false;
// var texi = 15;
// if(isRaining === true || money >= texi){
//   console.log( 'will go to market');
// }else {
//   console.log( 'will not go to market');
// }

var money = 50;
if(money >= 100){
  console.log( 'birani kabo');
}else if(money >= 50){
  console.log( 'chocolate kabo');
}else if(money >= 20){ 
  console.log( 'singara kabo');
}else {
   console.log( 'na keye bari ferot');
}

// nested if & else
 var isRaining = true;
 var haveUmbrella = true;

 if(isRaining === true){
    if(haveUmbrella === false){
      console.log( 'will go outside');
    }else{
      console.log( 'will not go outside');
    }
 }else {
  console.log( 'will go outside...it is  a sunny day ');
 }
 