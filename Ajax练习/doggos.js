const DOG_URL = "https://dog.ceo/api/breeds/image/random";

//fetch是一种处理异步的新的方法
const promise = fetch(DOG_URL);

promise
  .then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(processedResponse) {
    console.log(processedResponse);
  });

console.log("this will log first");