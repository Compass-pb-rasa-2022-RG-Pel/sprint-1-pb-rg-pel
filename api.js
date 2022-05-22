   function criarFrase() {
   var form = document.getElementById("form")

    form.addEventListener("submit", function(e){
    
    e.preventDefault()

    var name = document.getElementById("name").value
     
    fetch(`https://jsonplaceholder.typicode.com/posts/${name}`)
    .then((response) => response.json())
    .then((json) => {//console.log(data)
        var results = document.getElementById('results')
        console.log(json)
   
        results.innerHTML = `<p> ${json.title}</p>
        <p> ${json.body}</p>
        `});
})        
  
}