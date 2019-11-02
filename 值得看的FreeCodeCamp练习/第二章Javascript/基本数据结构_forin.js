// 注意使用for in的时候，不能直接用user.online,还是要在对象后面查找user，容易出错。

function countOnline(usersObj) {
  // change code below this line
  let number = 0;
  for (let user in usersObj){
      if(usersObj[user].online){
        number++;
      }
  }
  return number;
  // change code above this line
}
