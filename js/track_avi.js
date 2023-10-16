const disableDarkMode = () =>{
    toggleBtn.classList.replace('fa-moon', 'fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode', 'disabled');
 }
 
 if(darkMode === 'enabled'){
    enableDarkMode();
 }
 
 toggleBtn.onclick = (e) =>{
    darkMode = localStorage.getItem('dark-mode');
    if(darkMode === 'disabled'){
       enableDarkMode();
    }else{
       disableDarkMode();
    }
 }
 /*:root{
    --main-color:#10b6e9;
    --red:#e74c3c;
    --orange:#12f325;
    --light-color:#888;
    --light-bg:#eee;
    --black:#2c3e50;
    --white:#fff;
    --border:.1rem solid rgba(0,0,0,.2);
 }*/
let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');
