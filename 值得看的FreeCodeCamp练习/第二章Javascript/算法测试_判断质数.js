//把小于或等于num的所有的素数相加

//一种耗费时间但是简单的方法(by myself)
function sumPrimes(num) {
    let sum = 2;
    
    for (let i = 3; i <= num; i++) {
      let ji = 1;
      for (let k = 2; k <= i / 2; k++) {
        ji *= i % k;
      }
      if (ji != 0) {
        console.log(i);
        sum += i;
      }
    }
    console.log(sum)
    return sum;
  }
  
  
  sumPrimes(10);
  