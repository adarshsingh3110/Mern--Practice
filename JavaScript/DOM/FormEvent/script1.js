const form = document.getElementById("form")
const name = document.getElementById("name")
const course = document.getElementById("course")
const status = document.getElementById("status")

name.addEventListener('focus',()=>{
    status.innerText = "Focus Event"
})
name.addEventListener('blur',()=>{
    status.innerText = "Blur Event"
})
name.addEventListener('input',()=>{
    status.innerText = "Typing:" + name.value
})
name.addEventListener('change',()=>{
    status.innerText = "Final Value:" + name.value
})