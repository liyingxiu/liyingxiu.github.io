function steamrollArray(arr) {
    // I'm a steamroller, baby
    var res = [];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res = res.concat(steamrollArray(arr[i]));
        }
        else{
            res.push(arr[i]);
        }
    }
    
    return res;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
  