const navbar = document.getElementById("navbar-products");
const navbarHead = document.getElementById("main-navbar");
const liColor = document.querySelectorAll('.menu-before');
const tableLine = document.querySelectorAll('.table-line');


function showNavbar() {
    
    let whiteColumn = document.querySelectorAll('.orange-column');
    let i = whiteColumn.length;
    let j = liColor.length;
   

    if(navbar.style.display==="block"){
      navbar.style.display="none"
      navbarHead.style.background="white"
      while( i--){
        whiteColumn[i].style.background="#EF7D00"
        }
      liColor.forEach(element => {
        element.classList.remove('menu-after')
        element.classList.add('menu-before')
      });
    }
    else 
    {
      navbar.style.display="block"
      navbarHead.style.background="#EF7D00" 
      while( i--){
      whiteColumn[i].style.background="white"
      }
      liColor.forEach(element => {
        element.classList.remove('menu-before')
        element.classList.add('menu-after')
      });
    }
}


const showMenu = () => {
  const menu = document.getElementById('nav-mobile');
  if (menu.style.opacity === '1') {
      menu.style.opacity = '0';
      setTimeout(function(){
          menu.style.display='none'}, 200);
    } else {
      menu.style.display='block'
      setTimeout(function(){
      menu.style.opacity = '1';
  },100)
    }
}

