var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link")
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove('active-tab')
  }

  const element = event.currentTarget;
element.classList.add('active-link');

const dom = document.getElementById(tabname)
dom.classList.add('active-tab')

}

const sideMenu = document.getElementById('sideMenu');

function openMenu(){
  sideMenu.style.right = '0'
}
function closeMenu(){
  sideMenu.style.right = '-200px'
}