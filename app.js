// string kiritiladi string ichidagi + larni 0 ga aylantishish ⇒ “— + — +” ⇒ “— 0 — 0”

// let str = " - + - +";

// console.log(str.replace(`- + - +`, `- 0 - 0`));

// functionga arrey beriladi va bitta son beriladi shu sondan katta bo’lgan sonlarni o’chirib bersin

// let arr = [10, 3, 50, 20, 6, 7]

// let num = [10]

// function Numbers(arr, num){
//     return arr.filter (item => item <= num)
// }

// let newArr = Numbers(arr, num)

// console.log(arr);
// console.log(newArr);


// functionga son beriladi 1 honali ⇒ 1 * 5 = 5 ,2 * 5 = 10
// functionga son beriladi va shundan kichik sonlar ni arreyga solib qaytaradi

// let arr = [10, 3, 50, 20, 6, 7]

// let num = [10]

// function Numbers(arr, num){
//     return arr.filter (item => item <= num)
// }

// let newArr = Numbers(arr, num)

// console.log(newArr);


// functionga son beriladi shu sondan kichik bo’gan tub sonlarni arreyga solib qaytarsin

function findPrimes(n) {
    let primes = [];

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

console.log(findPrimes(10)); 


