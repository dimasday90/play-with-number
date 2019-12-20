function prime() {
  let n = Number(document.getElementById('number').value);
  if(n>50000) {
    document.getElementById('total').innerHTML = `Limit Yourself, please`;
  } else if (n>1&&n<=50000) {
    let result = 0;
    for (let i =2;i<=n;i++) {
      let isPrime = true;
      for (let j=2;j<i;j++) {
        if (i%j==0) {
          isPrime = false;
        }
      }
      if (isPrime === true) {
        result += i
      }
    }
    document.getElementById('total').innerHTML = `The prime total is ${result}`;
  } else {
    document.getElementById('total').innerHTML = `No Prime totaled`;
  } 
}