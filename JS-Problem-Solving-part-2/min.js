const prices = [20000, 16000, 50000, 100000, 99000];

function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min)
      return min;
  }

}
const cheap = getMin(prices);
console.log('this is the smallest price:', cheap);