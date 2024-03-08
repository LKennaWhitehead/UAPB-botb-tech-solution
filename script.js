
var settingsMenu = document.querySelector(".settings-menu");


function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");
}

// -----------dark mode button------------

var darkBtn = document.getElementById("dark-btn");

// darkBtn.onclick = function(){
//     darkBtn.classList.toggle('dark-btn-on');
//     document.body.classList.toggle("dark-theme");

//     const imageElement = document.getElementById('logo');

//       const currentSource = document.getElementById('logo');

//       console.log(currentSource);

//       const light = 'images/logo.png';
//       const dark = 'images/dark-logo.png';

//       if (currentSource === dark) {
//         imageElement.src = light;
//       } else {
//         imageElement.src = dark;
//       }

//     if(localStorage.getItem("theme") == "light"){
//         localStorage.setItem("theme", "dark");
//     }else{
//         localStorage.setItem("theme", "light");
//     }
    
// }

darkBtn.onclick = function() {
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle("dark-theme");
  
    const imageElement = document.getElementById('logo');
  
    const currentSource = imageElement.src;
  
    console.log(currentSource);
  
    const light = 'images/logo.png';
    const dark = 'images/dark-logo.png';
  
    if (currentSource.endsWith(dark)) {
      imageElement.src = light;
    } else {
      imageElement.src = dark;
    }
  
    if (localStorage.getItem("theme") === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
  
  

if(localStorage.getItem("theme") == "light"){

    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){

    darkBtn.classList.add('dark-btn-on');
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}
