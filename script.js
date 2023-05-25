var today = dayjs()
var currentHour = today.format("HH")
var parentContainers = $("#row");
var displayDateEl = $('#currentDay');
displayDateEl.text(today.format('dddd, MMM, YYYY hh:mm A'));

var allButtons = $(".saveBtn")
// console.log(allButtons)

allButtons.on("click", saveJqueryTask)

function saveJqueryTask(event) {
    event.preventDefault()
    // console.log($(this))
    var TimeElem = $(this).parent().attr("id")
    var TextAreaElem = $(this).prev().val()
    // console.log(TextAreaElem)
    localStorage.setItem(TimeElem, TextAreaElem)
}

var allParents = $(".time-block")
// console.log(allParents);
allParents.each(function () {
    // console.log($(this))
    var myId = parseInt($(this).attr("id"))
    if(myId == currentHour){
        $(this).addClass("present")
    } else if(myId < currentHour){
        $(this).addClass("past")

    } else{
        $(this).addClass("future")

    }
   var savedTask = localStorage.getItem(myId)
 $(this).children(':nth-child(2)').val(savedTask)
})