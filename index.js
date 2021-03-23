const navbar = document.getElementById("navbar-products");
const navbarHead = document.getElementById("main-navbar");
const liColor = document.querySelectorAll('.menu-before');


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

function hover(element)
{
  if(navbarHead.style.background ="#EF7D00")
  {
      element.style.color = "white";
      element.style.borderBottom = "3px solid black"
  }
  else{
      element.style.color = "black";
  }

  
}
function hoverOff(element)
{
    element.style.color = "black";
    element.style.borderBottom = "none"
}


