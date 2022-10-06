function lowerCaseWords(arr) {
    let p1 = new Promise((resolve, reject) => {
        if (arr.length != 0) {
            const result = arr.filter(checkString);
            resolve(result);
        } else {
            reject("Array is empty")
        }
    })
    return p1;
}
function checkString(variable) {
    if (typeof variable === 'string') {
        return variable;
    }

}
const mixedArray = ['PIZZA', 10, true, 25, false, "Wings"]
lowerCaseWords(mixedArray).then((success) => {
    const loweCase = success.map(success => success.toLowerCase());
    console.log(loweCase);
}).catch((error) => {
    console.log("SOrry there is some Error: " + error)
});