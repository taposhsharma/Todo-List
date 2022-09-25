//Add fuctionality
function clickHandler(e){
    e.preventDefault()
    let newItem = document.getElementById("item").value
    if(newItem == ""){
        alert("Please enter some text")
    }else{

    let li = document.createElement("li")
    li.className = "list-group-item"
    let node = document.createTextNode(newItem)
    li.appendChild(node)
    
    let btn = document.createElement('button')
    btn.className = "btn btn-danger btn-sm float-right delete"
    btn.appendChild(document.createTextNode("X"))
    li.appendChild(btn)

    let list = document.getElementById("items")
    list.appendChild(li)
    document.getElementById("item").value = ""
    }
    
}
function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure to delete?")){
            itemList.removeChild(e.target.parentElement)
        }
    }
}

function searchItem(e){
    let value = e.target.value.toLowerCase()
    let items = itemList.getElementsByTagName("li")
    let itemArray = Array.from(items)
    itemArray.forEach(function(values){
        let item = values.firstChild.textContent
        if(item.toLowerCase().indexOf(value) !=-1){
            values.style.display = "block"
        }else{
            values.style.display = "none"
        }

    })
}


let form = document.getElementById("addForm")
form.addEventListener('submit', clickHandler)
//delete the item
let itemList = document.getElementById("items")
itemList.addEventListener('click', removeItem)
//search the item
let filter = document.getElementById("filter")
filter.addEventListener('keyup', searchItem)