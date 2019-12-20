function factor1(num) {
    // let list = document.getElementById('list-factor')
    // let num = document.getElementById('number').nodeValue;
    let result = [];
    for(let i = 1; i <= num; i ++) {
        if(num%i===0) {
            result.push(i);
        }
    }
    result.forEach(x => {
        // let bar = document.createElement('li')
        let arr = [];
        for(let n = 1; n <= x; n ++) {
            if(x%n===0) {
                arr.push(n);
            }
        }
        // bar.innerHTML = `<li>${x}: ${arr}</li>`
        console.log(`${x}: ${arr}`)
    })
    // console.log(factorBar)
    // list.innerHTML = `<li>${x}: ${arr}</li>`;
}

factor1(10)
