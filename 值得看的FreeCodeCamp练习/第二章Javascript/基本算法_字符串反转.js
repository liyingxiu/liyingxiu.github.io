function reverseString(str) {
    let array = [];
    for(let j = 0;j<str.length;j++){
      array.push(str[j]);
    }
    for(let i = 0;i<Math.floor(array.length/2);i++){
      let temp = array[i];
      array[i] = array[str.length-1-i];
      array[str.length-1-i] = temp;
    }
    str = array.join('');
    return str;
  }
  
  reverseString("hello");
  