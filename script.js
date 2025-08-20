const arr = ['hello', 'abc', 'level']

let count = 0

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    count += isSingle(element)
}

console.log(count);

function isSingle (arr) {
    const sum = []
    let index = null
    for (let i = 0; i < arr.length; i++) {
        if (sum.includes(arr[i])) {
            index = sum.indexOf(arr[i])
            sum.splice(index, 1)
        }else sum.push(arr[i])
    }
    return sum.length
}