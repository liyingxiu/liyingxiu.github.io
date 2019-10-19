var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

// 在每个循环迭代期间，使用条件语句检查当前数组项是否等于“Phil”或“Lola”：
for(i = 0;i < people.length -1;i++){
    if(people[i] === 'Phil' || people === 'Lola'){
        refused.textContent += people[i] + ", ";
    }
    else{
        admitted.textContent += people[i] + ", ";
    }
}

//最后的句号可以用slice实现。

// var i = 0;

// refused.textContent += ;
// admitted.textContent += ;

var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');

var i = 0;

do {
  if(people[i] === 'Phil' || people[i] === 'Lola') {
    refused.textContent += people[i] + ', ';
  } else {
    admitted.textContent += people[i] + ', ';
  }
  i++;
} while(i < people.length);

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';