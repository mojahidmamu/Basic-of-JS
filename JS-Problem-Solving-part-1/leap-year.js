 /**SIMPLE Logic
  * year will be a leap year if the year is divisible by 4
  * 
  */
 function isleapyear(year){
   if(year % 4 === 0){
     return true;
   }
   else {
    return false;
   }
 }
//  console.log(isleapyear(2062));


 /**
  * 1. those year that is not divisible by 100, if the year is divisible by 4;
  *   then it is leap year,,,,,
  */
 function isleapyear2(year){
  if (year % 100 !== 0 && year % 4 === 0) {
       return true;
  }
  if(year % 100 === 0 && year % 400 === 0){
    return true;
  }
  return false;
 }
//  console.log(isleapyear2(2052));
//  console.log(isleapyear2(2075));
//  console.log(isleapyear2(2045));
//  console.log(isleapyear2(2024));

 function leapyear (bosor){
   if(bosor % 4 === 0){
    return true;
   }
   else{
     return false;
   }
 }
//  console.log(leapyear(2024) );