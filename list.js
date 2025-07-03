let list=document.getElementById("addtolist");
let innerfield=document.getElementById("innerfield");
let todo=document.getElementById("todo");

list.addEventListener('click', function(){
    var adding=document.createElement('div');
    adding.classList.add('add-style');
    adding.innerText=innerfield.value;
    todo.appendChild(adding);
    innerfield.value="";

    adding.addEventListener('click',function(){
        adding.style.textDecoration=("line through");
    })

        adding.addEventListener('click',function(){
            todo.removeChild(adding);

    })
})
