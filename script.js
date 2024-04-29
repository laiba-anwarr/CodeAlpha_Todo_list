var enterText=document.getElementById("enter-text");
var listContainer=document.getElementById("list-container");
function addTask(){
    if(enterText=== ''){
        alert("you must write something");
    }
    else{
        var li=document.createElement("li");
        li.innerHTML=enterText.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    enterText.value=("");
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

else if(e.target.tagName === ("SPAN")){
    
    e.target.parentElement.remove();
    saveData();
}
console.log(e)
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();