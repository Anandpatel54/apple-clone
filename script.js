let nav_list = document.getElementById('nav-list')
let openMenu = document.querySelector('.menuopen')
let cross = document.querySelector('g')

openMenu.addEventListener("click",function(){
    nav_list.style.opacity = '100%'
    openMenu.style.display = 'none'
})
cross.addEventListener('click',function(){
    nav_list.style.opacity = '0'
    setTimeout(function(){
        openMenu.style.display = 'block'
    },600)
})