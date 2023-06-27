var assign_people = false
var All_people = ['65 years or more<br><button onclick="AddToIndex(0)">+</button>0<button onclick="DecreaseToIndex(0)">-</button>', 
"Adult 26-64 years\n+0-", "Junior 18-25 years\n+0-", "Junior 15-17 years\n+0-", "Child 10-14 years\n+0-", "Child 6-9 years\n+0-", "Child 0-5 years\n+0-"]

String.prototype.replaceAt = function(index, replacement) {
    return this.replace(this[index], replacement)
}

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
    All_people[index] -= 1
    refresh()
}

function AddToIndex(index){
    //All_people[index] += 1
    let idx = All_people[index].indexOf("+</button>") + 10
    var num = parseInt(All_people[index][idx]) + 1
    console.log(All_people[index][idx])
    All_people[index] = All_people[index].replaceAt(idx, num)

    refresh()
}

function refresh(){
    var all_selections = document.getElementsByClassName("dropdown-content")[0].children
    for(let i = 0; i < all_selections.length; i++){
        console.log(All_people[i])
        all_selections[i].innerHTML = All_people[i]
    }
}