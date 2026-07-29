// what if form event?

//Examples ->ttyping.., value change reset

//Event List
//Submit:- form submit
//reset:- form reset
//input:- for every Character it will type or(live value)
//change :- final value
//focus:- when u click on input box
//blur :- out of the input focus
//invalid:- validation failed
//select:- text select

//submit
// const form = document.getElementById('form')
// const output = document.getElementById('output')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     let name = document.getElementById("name").value
//    output.innerText = "welcome" + name
// })

//input
// const box = document.getElementById('box')
// box.addEventListener('input',()=>{
//     document.getElementById("result").innerText = box.value
// })

//change
// const box = document.getElementById('box')
// box.addEventListener('change',()=>{
//     document.getElementById("result").innerText = box.value
// })

//focus
// const box = document.getElementById('box')
// box.addEventListener('focus',()=>{
//     box.style.background = "Palegreen"
// })

//blur
// const box = document.getElementById('box')
// box.addEventListener('blur',()=>{
//     box.style.background = "black"
// })

//Invalid
// const name = document.getElementById('name')
// name.addEventListener('invalid',()=>{
// })

//select
document.querySelector("input").addEventListener('select',()=>{
    alert("Text selected")
})