const canvas = document.getElementById('paint')
const ctx = canvas.getContext('2d')
const clearBtn = document.getElementById('clearBtn')

//Drawing state
let isDrawing = false
let brushColor = "#1f1f1f";
let brushWidth = 5

//mousedown && mouseup
//user click nf hold the board -> draw hoga
canvas.addEventListener('mousedown',(event)=>{
    isDrawing = true
    ctx.beginPath()
    ctx.moveTo(event.offsetX, event.offsetY)
})

canvas.addEventListener('mouseup',()=>{
    isDrawing = false
    ctx.closePath()
})

//mousemove
canvas.addEventListener('mousemove',(event)=>{
    if(!isDrawing) return
    ctx.lineWidth = brushWidth
    ctx.lineCap = 'round' //smooth corners
    ctx.strokeStyle = brushColor

    ctx.lineTo(event.offsetX, event.offsetY) //line draw
    ctx.stroke(); //line visible to screen
});

canvas.addEventListener('mouseleave',()=>{
    isDrawing = false
})
canvas.addEventListener('mouseenter',()=>{
    console.log("you can draw")
})
//clear Board
clearBtn.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})
//double click
canvas.addEventListener("dblclick", () => {
    const randomBg = `hsl(${Math.random() * 360},80%,90%)`;
    canvas.style.backgroundColor = randomBg;
});

canvas.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // Right click menu ko rokega
    brushColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
//     const colors = ["red","blue", "green","yellow","orange","purple","pink","cyan",
//     "white",
//     "black"
// ];
    // const randomIndex = Math.floor(Math.random() * colors.length);
    // brushColor = colors[randomIndex];
});
    
