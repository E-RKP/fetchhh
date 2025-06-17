fetch("https://jsonplaceholder.typicode.com/posts").then(function (placeholder){
  return placeholder.json();
}).then(function(placeholder){
  for (i=0; i<10;i++){
    console.log(placeholder[i])
  }
})
