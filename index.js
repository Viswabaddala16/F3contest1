
let btn = document.getElementById("btn");



function promiseAPI(){
    setTimeout(() =>{
        fetch("https://dummyjson.com/posts",).then((data) => {
                return data.json();
        }).then( (objectData) => {
      
        const posts = objectData.posts;
        let tableData = "";   
        posts.map(values => {
            tableData += `
            <tr>
            <td>${values.id}</td>
            <td>${values.userId}</td>
            <td>${values.title}</td>
            <td>${values.body}</td>
        </tr>        
            `;


        })
        document.getElementById("table-body").innerHTML = tableData;

        })


    },1000)
}
    
function promiseAPI2() {
    setTimeout(() =>{
        fetch("https://dummyjson.com/posts",).then((data) => {
                return data.json();
        }).then( (objectData) => {
      
        const posts = objectData.posts;
        let tableData = "";   
        posts.map(values => {
            tableData += `
            <tr>
            <td>${values.id}</td>
            <td>${values.title}</td>
            <td>${values.price}</td>
            <td>${values.description}</td>
        </tr>        
            `;


        })
        document.getElementById("table-body").innerHTML = tableData;

        })


    },2000)

}
function promiseAPI3(){
    setTimeout(() =>{
        fetch("https://dummyjson.com/posts",).then((data) => {
                return data.json();
        }).then( (objectData) => {
      
        const posts = objectData.posts;
        let tableData = "";   
        posts.map(values => {
            tableData += `
            <tr>
            <td>${values.id}</td>
            <td>${values.title}</td>
            <td>${values.price}</td>
            <td>${values.description}</td>
        </tr>        
            `;


        })
        document.getElementById("table-body").innerHTML = tableData;

        })


    },3000)

}


btn.addEventListener('click',() => {

    promiseAPI().then(result =>{
        if(result){
            return promiseAPI2();
        }
    })
    .then(result=>{
        if(result){
            return promiseAPI3();
        }
        
    })
    .catch(error => console.log(error));
});
