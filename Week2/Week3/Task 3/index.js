document.querySelector('.themetoggle').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark'){
        localStorage.removeItem('theme');
    }
    else if (localStorage.getItem('theme') === 'light'){
            localStorage.setItem('theme', 'blue');
    }
    else{
        localStorage.setItem('theme', 'dark')
    }
    addDarkClassToHTML()
});

function addDarkClassToHTML() {
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('html').classList.add('dark');
        document.querySelector('.themetoggle span').textContent = 'dark_mode';
      }
      else if (localStorage.getItem('theme') === 'blue') {
            document.querySelector('html').classList.add('blue');
            document.querySelector('.themetoggle span').textContent = 'dark_mode'
      }
      else {
        document.querySelector('html').classList.remove('dark');
        document.querySelector('.themetoggle span').textContent = 'wb_sunny';
      }
    } catch (err) { }
  }  
  
addDarkClassToHTML();

function show(){
    if (document.getElementById("theme").value == "light"){
        document.body.style.backgroundColor = 'pink';
        document.body.style.color = "violet";
}
    else if (document.getElementById("theme").value == "blue"){
        document.body.style.backgroundColor  = 'blue';
        document.body.style.color = "grey";
}
    else if (document.getElementById("theme").value == "dark"){
        document.body.style.backgroundColor  = 'black';
        document.body.style.color = "green";
}
}
