//值得注意的：sort的排序是针对字符串而言的，如果要从小到大排序需要添加相应的函数
//判断数组是否为空，可以使用条件if(Array.isArray(arr) && arr.length === 0)

function getIndexToIns(arr, num) {
    //sort从小到大排序
    arr.sort(function (a, b) {
      return a - b;
    });
    console.log(arr);
    if (arr.length === 0) {
      console.log(0);
      return 0;
    }
    else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
          console.log(i);
          return i;
        }
        else if (arr[i] < num & num < arr[i + 1]) {
          console.log(i + 1);
          return i + 1;
        }
        else if (num > arr[arr.length - 1]) {
          console.log(arr.length);
          return arr.length;
        }
      }
    }
  }
  
  
  getIndexToIns([5, 3, 20, 3], 5);//2
  getIndexToIns([2, 5, 10], 15);//3
  getIndexToIns([], 1);//0
  
  