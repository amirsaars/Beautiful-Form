console.log("one");

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Important Value")
    }, 2000)
})

console.log("two");

myPromise.then((value) => console.log(value));

console.log("three");

myPromise.catch((error) => console.log(error));

console.log("four");