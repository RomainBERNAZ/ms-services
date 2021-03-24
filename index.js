const navbar = document.getElementById("navbar-products");
const navbarHead = document.getElementById("main-navbar");
const liColor = document.querySelectorAll('.menu-before');
const tableLine = document.querySelectorAll('.table-line');
const menuMobile = document.querySelector('.menu-mobile-nav')
const submenu = document.querySelector('.submenu-mobile');


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

  if(menuMobile.style.display==="block"){
    menuMobile.style.display="none"
  }
  else 
    {
      menuMobile.style.display="block"
    }


}




function openSubmenu(){
  let liSub = document.querySelectorAll('.li-submenu')
  let i = liSub.length
  console.log(liSub);

  liSub.forEach(element => {
    element.style.display="block"
  });
}


function closeSubmenu(){
  let liSub = document.querySelectorAll('.li-submenu')
  let j = liSub.length
  while( j--){
    liSub[j].style.removeProperty('display');
  }
  console.log(liSub);

}

