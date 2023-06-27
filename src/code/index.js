var assign_people = false
var All_people = ['65 years or more<br><button onclick="AddToIndex(0)">+</button>0<button onclick="DecreaseToIndex(0)">-</button>', 
'Adult 26-64 years<br><button onclick="AddToIndex(1)">+</button>0<button onclick="DecreaseToIndex(1)">-</button>', 
'Junior 18-25 years<br><button onclick="AddToIndex(2)">+</button>0<button onclick="DecreaseToIndex(2)">-</button>', 
'Junior 15-17 years<br><button onclick="AddToIndex(3)">+</button>0<button onclick="DecreaseToIndex(3)">-</button>', 
'Child 10-14 years<br><button onclick="AddToIndex(4)">+</button>0<button onclick="DecreaseToIndex(4)">-</button>', 
'Child 6-9 years<br><button onclick="AddToIndex(5)">+</button>0<button onclick="DecreaseToIndex(5)">-</button>', 
'Child 0-5 years<br><button onclick="AddToIndex(6)">+</button>0<button onclick="DecreaseToIndex(6)">-</button>']

function Register(){
    console.log(document.getElementsByClassName("dropdown-content")[0].style["display"])
    if (!assign_people){
        document.getElementsByClassName("dropdown-content")[0].style["display"] = "block"
        assign_people = true
    }
    else{
        assign_people = false
        document.getElementsByClassName("dropdown-content")[0].style["display"] = "none"
    }
}

function DecreaseToIndex(index){
    let idx = All_people[index].indexOf("+</button>") + 10
    var num = parseInt(All_people[index][idx]) - 1
    if (num == -1){
        return
    }

    var str_array = All_people[index].split("")
    str_array[idx] = num
    console.log(str_array.join(""))
    All_people[index] = str_array.join("")

    refresh()
}

function AddToIndex(index){
    let idx = All_people[index].indexOf("+</button>") + 10
    var num = parseInt(All_people[index][idx]) + 1
    var str_array = All_people[index].split("")
    str_array[idx] = num
    console.log(str_array.join(""))
    All_people[index] = str_array.join("")

    refresh()
}

function refresh(){
    var all_selections = document.getElementsByClassName("dropdown-content")[0].children
    for(let i = 0; i < all_selections.length; i++){
        console.log(all_selections)
        all_selections[i].innerHTML = All_people[i]
    }
}