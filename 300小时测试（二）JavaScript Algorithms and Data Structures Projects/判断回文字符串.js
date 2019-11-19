function palindrome(str) {
    let part = /[a-zA-Z0-9]/ig;
    let arr = str.toLowerCase().match(part);
    console.log(arr);
    let result = true;
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] != arr[arr.length - 1 - i]) {
            result = false;
        }
    }
    console.log(result);
    return result;
}

palindrome("1 eye for of 1 eye.")