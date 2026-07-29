const form = document.getElementById("notes")
const input = document.getElementById("noteInput")
const list = document.getElementById("notesList")
const count = document.getElementById("count")
const clearBtn = document.getElementById("clearBtn")
const add = document.getElementById("add")

let totalNotes = 0

//notes add
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    if(input.value.trim() ===""){
        alert("Notes input is empty")
        return
    }
    //create list
    const li = document.createElement("li")

    const span = document.createElement("span")
    span.innerText = input.value

    //delete button
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"
    deleteBtn.className = "deleteBtn"

    deleteBtn.addEventListener('click',()=>{
        li.remove()
        totalNotes--
        count.innerText = totalNotes

    })

    //Add element
        li.append(span)
        li.append(deleteBtn)

        list.append(li)

        totalNotes++
        count.innerText = totalNotes

        input.value = ""

})

// clearBtn.addEventListener('click',()=>{
//     for(let i = 0; i < totalNotes; i++){
//         li.remove()
//     }
//     totalNotes = 0
//     count.innerText = totalNotes
// })
clearBtn.addEventListener("click", () => {
    list.innerHTML = "";
    totalNotes = 0;
    count.innerText = totalNotes;
});

