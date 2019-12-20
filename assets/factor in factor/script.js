let target = document.getElementById('main-contain')
let mainList = document.createElement('ul');
function factor1() {
    mainList.innerHTML = '';
    let num = document.getElementById('number').value;
    let result = [];
    for(let i = 1; i <= num; i ++) {
        if(num%i===0) {
            result.push(i);
        }
    }
    result.forEach(x => {
        let list = document.createElement('li')
        list.innerHTML = `${x}:<br>`
        let arr = '';
        for(let n = 1; n <= x; n ++) {
            if(x%n===0) {
                if(n === x) {
                    arr += `${n}`
                } else {
                    arr += `${n}, `
                }
            }
        }
        list.innerHTML += `${arr}`
        mainList.appendChild(list);
    })
    target.appendChild(mainList);
}
