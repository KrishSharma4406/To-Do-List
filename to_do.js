let inputbox = document.getElementById("input");
let list = document.getElementById("list");

function addtask() {
    let inputValue = inputbox.value;
    if (inputValue === "") {
        alert("Please enter a task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputValue;
        list.appendChild(li);
        inputbox.value = "";
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    savedata()
}

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata()
    }
}, false)

function savedata(){
    localStorage.setItem("data", list.innerHTML);
}

function showtask(){
    list.innerHTML = localStorage.getItem("data");
}
showtask()