// // 12 inch = 1 feet
// function inchTofeet(inch) {
//   const feet = inch / 12;
//   return feet;
// }
// // 75  ------->
// // ignore this one ---->>>>>
// function inchTofeet2(inch){
//     const feetfraction = inch / 12;
//     const feetnumber = parseInt(feetfraction);
//     const inchRemaining = inch % 12;
//     const result = feetnumber + 'ft' + inchRemaining + 'inch.'
// } 

//  const asrafheight = inchTofeet(54);
// console.log(asrafheight);

// const mojahidheight2 = inchTofeet2(85);
// console.log(mojahidheight2);


function milesTokilometer (mile){
  const kilo = mile * 1.60934;
  return kilo;
}


function kilometerTomiles(kilo){
  const  mile = kilo * 0.621371
  return mile;
}

console.log(kilometerTomiles);