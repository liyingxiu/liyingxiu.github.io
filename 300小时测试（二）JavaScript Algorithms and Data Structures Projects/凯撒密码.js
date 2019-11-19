function rot13(str) { 
  let arr = str.split('');
  console.log(arr);
  for(let i=0;i<arr.length;i++){
      if(arr[i].match(/[A-Z]/ig)){
          let ascii = arr[i].charCodeAt();
          console.log(ascii);
          if(ascii>=65 && ascii<=77){
              arr[i] = String.fromCharCode(ascii +13);
          }
          else{
              arr[i] = String.fromCharCode(ascii - 13);
          }
      }
  }
  console.log(arr);
  str = arr.join('');
  console.log(str);
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
