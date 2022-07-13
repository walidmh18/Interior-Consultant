



const navBtn = document.getElementById('navopen')
const navlist = document.getElementById('navlist')
navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('Active')
    navlist.classList.toggle('navliston')
})

