function lightTheme() {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('mode','light-mode') 
}

function darkTheme() {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode'); 
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