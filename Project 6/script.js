// Add a close button to each list item
function addCloseButtons() {
    var myNodeList = document.getElementsByTagName("LI");
    for (let i = 0; i < myNodeList.length; i++) {
        if (!myNodeList[i].querySelector('.close')) {
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            myNodeList[i].appendChild(span);
        }
    }
    setCloseHandlers();
}

// Set close button event handlers
function setCloseHandlers() {
    var close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var li = this.parentElement;
            li.remove();
        }
    }
}

// Mark a list item as checked when clicked
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Add a new task
function addTask() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("You must write something!");
        return;
    }
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputValue));
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";
    addCloseButtons();
}

// Initialize close buttons for existing items
addCloseButtons();