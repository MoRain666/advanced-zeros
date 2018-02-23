module.exports = function getZerosCount(number, base) {
  let result = 0;
  let primeNumbers = {};
  let countOfKeys = 0;
  let arrayOfKeys = [];
  let arrayAfterSort;
  function CompareForSort(first, second)
{
    if (first == second)
        return 0;
    if (first < second)
        return -1;
    else
        return 1; 
}

  for (let i = 2; i <= base; i++){
    let degreeOfNumber = 0;
    if (base % i == 0){
      while(base % i == 0){
        base /=i;
        degreeOfNumber++;}
        primeNumbers[i] = degreeOfNumber;
        countOfKeys++;
      }
    }
  let largestNumber;
  let factor = 1;
  if(countOfKeys > 1){
    for(var key in primeNumbers){
      arrayOfKeys.push(key);
    }
     arrayAfterSort = arrayOfKeys.sort(CompareForSort).reverse();
     largestNumber = arrayAfterSort[0];
  }else{
    largestNumber = Object.keys(primeNumbers)[0];
  }
  largestNumber = parseInt(largestNumber);
  for(let i = largestNumber;i < number; i *= largestNumber){
    result += Math.floor(number / i);
  }
  return Math.floor(result /= primeNumbers[largestNumber]);
  };
