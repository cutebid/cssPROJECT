
const navigation= function  myfunction() {
   const navs = document.querySelectorAll('.aside-items')
   navs.forEach(nav => nav.classList.toggle('nav-Hamburger'));
}
document.querySelector('.hamburger').addEventListener('click', navigation);

