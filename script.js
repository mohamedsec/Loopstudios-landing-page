const listBtn = document.getElementById('list')
const closeBtn = document.getElementById('close')
const showMenue = document.getElementById('show')
const main = document.getElementById('main')
const foot = document.getElementById('foot')
listBtn.addEventListener('click',()=>{
    showMenue.style.display = "block"
    main.style.display = "none"
    foot.style.display = "none"
    
})
closeBtn.addEventListener('click',()=>{
    showMenue.style.display = "none"
    main.style.display = "block"
    foot.style.display = "block"
    
})