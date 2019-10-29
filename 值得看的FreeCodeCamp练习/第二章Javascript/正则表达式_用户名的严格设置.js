
// 1）用户名只能使用字母数字字符。

// 2）用户名中唯一的数字必须在末尾。 最后可以有零个或多个。

// 3）用户名字母可以小写和大写。

// 4）用户名必须至少两个字符长。 两个字符的用户名只能使用字母作为字符。

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);
