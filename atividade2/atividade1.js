
function isPrime(number) {
    for(let divisor = 2; divisor<number; divisor++){
        if(number%divisor === 0){
            return false
        }
    }
    return true
}


for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i)
    }
}
