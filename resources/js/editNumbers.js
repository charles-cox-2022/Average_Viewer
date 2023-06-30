let numbers = [];
function getNumbers(){
    return numbers;
}
//add number
function eventAddNumber(){
    let number = document.getElementById('inputNumber').value;
    let date = document.getElementById('inputDate').value;
    addNumber(date,number)
}
//getLocalData
function getLocalData() {
    let data = localStorage.getItem('RNumbers');
    numbers = JSON.parse(data);
    if(numbers == 'NULL' || numbers == 'undefined' || numbers == null){
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
    id = Object.keys(numbers).length;
    numbers.push({"ID":id,"Date": date,"Number": number})
    //numbers = sortByDate(numbers);
    updateLocalData();
    refreshList();
}
//remove number
function removeNumber(id,date,number){
    let newObject = [];
    let count = 0;
    for(let i = 0; i < Object.keys(numbers).length; i++)
    {
        
        if(numbers[i].ID == id && numbers[i].Date == date && numbers[i].Number == number){
            //Do Nothing
        } else {
            newObject.push({"ID":count,"Date": numbers[i].Date,"Number": numbers[i].Number})
            count++;
        }
        
    }
    numbers = newObject;
    updateLocalData();
    refreshList();   
}
//Sort Items by Date
function sortByDate(n){
    let result = [];

    //SORT

    return result;
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
        btn.innerText = "Remove";
        btn.addEventListener('click',function(){removeNumber(i,numbers[i].Date,numbers[i].Number);});
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
