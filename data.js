fetch("https://jsonplaceholder.typicode.com/posts").then(function (placeholder){
  return placeholder.json();
}).then(function(placeholder){
  for (i=0; i<10;i++){
    console.log(placeholder[i])
  }
})

const uno = document.getElementById('uno')
const due = document.getElementById('due')
const tre = document.getElementById('tre')
const quattro = document.getElementById('quattro')
fetch("https://jsonplaceholder.typicode.com/users").then(function(placeholder){
  return placeholder.json();
}).then(function(placeholder){
  for (i=0; i<placeholder.length;i++){

    const li = document.createElement('li')
    li.textContent = `Name: ${placeholder[i].name} |  Email: ${placeholder[i].email}`
    document.body.appendChild(li)
    
  }
 
}).catch(function(){
  const u = document.createElement('p')
  u.textContent = 'A COGLIONE'
  document.body.appendChild(u)

})