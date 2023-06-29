let numbers = [];

//add number

//getLocalData
function getLocalData() {
    let data = localStorage.getItem('RNumbers');
    numbers = JSON.parse(data);
    if(numbers == 'NULL'){
        numbers = [];
    }
}
//updateLocalData
function updateLocalData() {
    let data = JSON.stringify(numbers);
    localStorage.setItem('RNumbers',data);
}
//clear local data
function clearLocalData() {
    localStorage.setItem('RNumbers','NULL');
}
function addNumber(date,number){
    numbers.push({"Date": date,"Number": number})
    updateLocalData();
}
//remove number
function removeNumber(date,number){
    let newObject = [];
    for(let i = 0; i < Object.keys(numbers).length; i++)
    {
        if(numbers[i].Date == date && numbers[i].Number == number){
            //Do Nothing
        } else {
            newObject.push({"Date": numbers[i].date,"Number": numbers[i].number})
        }
    }
    numbers = newObject;
    updateLocalData();
    refreshList();   
}

//create list of objects
function createList(){
    let parent = document.getElementById("listParent");
    for(let i = 0; i < Object.keys(numbers).length; i++)
    {
        let div = document.createElement('div');
        div.className = 'center';
        parent.appendChild(div);
        let btn = document.createElement('button');
        btn.addEventListener('click',function(){removeNumber(numbers[i].Date,numbers[i].Number);});
        let list = document.createElement('li');
        list.innerText = `${numbers[i].Date}: ${numbers[i].Number}`
        div.appendChild(list)
        div.appendChild(btn);

    }
}
//refresh list of objects
function refreshList() {
    let parent = document.getElementById("listParent");
    while(parent.firstChild){
        parent.removeChild(parent.lastChild);
    }
    createList();
}
getLocalData();
createList();
