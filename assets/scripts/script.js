function lightTheme() {
    var element = document.body;
    element.classList.remove('dark-mode');
    element.classList.add('light-mode');
    localStorage.setItem('mode','light-mode') 
}

function darkTheme() {
    var element = document.body;
    element.classList.remove('light-mode');
    element.classList.add('dark-mode'); 
    localStorage.setItem('mode','dark-mode')
}

function themeCheck() {
    if (localStorage.getItem('mode') != null){
        var theme = localStorage.getItem('mode');
        
        if (document.body.classList.contains(theme) == false){
            document.body.classList.add(theme);
        }
    } else {
        darkTheme()
    }
}

function linkDisplay(num) {
    var title = document.getElementsByTagName("a")[num].getAttribute("title");
    document.getElementById("linkTitle").innerHTML = title;
}

function linkHide() {
    document.getElementById("linkTitle").innerHTML = null;
}