function getToday() {
    let currentDate = new Date().toJSON().slice(0, 10);

    return currentDate;
}
function get4WeeksBack() {
    let today = new Date();
    //subrats 28 days from today (4 weeks)
    let currentDate = new Date(today - 28*86400000).toJSON().slice(0, 10);
    
    return currentDate;
}
//set default date range
function defaultDates() {
    let startDate = document.getElementById('date-start');
    let endDate = document.getElementById('date-end');
    endDate.setAttribute('value',getToday());
    startDate.setAttribute('value',get4WeeksBack());
}
    //is date range valid? Start must be before end

//popup widget (by id)
function popupOpen(id) {
    let popup = document.getElementById(id);
    popup.style.display = 'grid';
    popup.style.visibility = 'visible';
    let content = document.getElementById('content-1');
    content.style.display = 'none';
}
//close popup widget
function popupClose(id) {
    let popup = document.getElementById(id);
    popup.style.display = 'none';
    popup.style.visibility = 'collapsed';
    let content = document.getElementById('content-1');
    content.style.display = 'grid';
}
