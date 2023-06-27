var All_people = ['65 years or more<button onclick="AddToIndex(0)">+</button>0<button onclick="DecreaseToIndex(0)">-</button>', 
'Adult 26-64 years<button onclick="AddToIndex(1)">+</button>0<button onclick="DecreaseToIndex(1)">-</button>', 
'Junior 18-25 years<button onclick="AddToIndex(2)">+</button>0<button onclick="DecreaseToIndex(2)">-</button>', 
'Junior 15-17 years<button onclick="AddToIndex(3)">+</button>0<button onclick="DecreaseToIndex(3)">-</button>', 
'Child 10-14 years<button onclick="AddToIndex(4)">+</button>0<button onclick="DecreaseToIndex(4)">-</button>', 
'Child 6-9 years<button onclick="AddToIndex(5)">+</button>0<button onclick="DecreaseToIndex(5)">-</button>', 
'Child 0-5 years<button onclick="AddToIndex(6)">+</button>0<button onclick="DecreaseToIndex(6)">-</button>',
"Confirm"]

var destination_switch = false
var depart = ""
var arrival = ""
var class_select = ""

function Register(assign_switch){
    if (assign_switch){
        document.getElementsByClassName("dropdown-content")[0].style["display"] = "block"
        assign_people = true
    }
    else{
        assign_people = false
        document.getElementsByClassName("dropdown-content")[0].style["display"] = "none"
    }
}

function OpenClassMenu(){
    document.getElementsByClassName("dropdown-content")[1].style["display"] = "block"
}

function CloseClassMenu(index){
    class_select = (index + 1).toString()
    document.getElementsByClassName("dropdown-content")[1].style["display"] = "none"
    document.getElementById("ClassChange").innerText = class_select + ". class"
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

function shift_time(left_or_right){
    var time_elem = document.getElementById("timeshow")
    var time_str = time_elem.innerText
    var time_main = time_str.substring(0, 2)
    var new_time;
    if (left_or_right){
        //left
        new_time = parseInt(time_main) - 1
    }
    else{
        //right
        new_time = parseInt(time_main) + 1
    }
    time_elem.innerText = new_time.toString() + ":00"
}

function switch_destinations(){
    depart = document.getElementsByClassName("from")[0].value
    arrival = document.getElementsByClassName("to")[0].value

    if(destination_switch){
        //not default
        document.getElementById("arrowbutton").style["transform"] = ""
        destination_switch = false
    }
    else{
        //default
        document.getElementById("arrowbutton").style["transform"] = "scaleX(-1)"
        destination_switch = true
    }

    document.getElementsByClassName("from")[0].value = arrival
    document.getElementsByClassName("to")[0].value = depart
}

function InvokeAction(){
    //fuck you
    window.location.href = "./search_invoked.html"
}

function GoBack(){
    window.location.href = "./index.html"
}