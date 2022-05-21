// set the date 
$("#currentDay").text(moment().format("Do MMMM YYYY, dddd"));

// load tasks saved in local storage using id
var loadTasks = function () {
    $("#9 .task-container").val(localStorage.getItem("9"));
    $("#10 .task-container").val(localStorage.getItem("10"));
    $("#11 .task-container").val(localStorage.getItem("11"));
    $("#12 .task-container").val(localStorage.getItem("12"));
    $("#13 .task-container").val(localStorage.getItem("13"));
    $("#14 .task-container").val(localStorage.getItem("14"));
    $("#15 .task-container").val(localStorage.getItem("15"));
    $("#16 .task-container").val(localStorage.getItem("16"));
    $("#17 .task-container").val(localStorage.getItem("17"));
}



// changes the color of the container according to the hour
var colorChange = function () {
    
    let currentTime = moment().format("HH");
    $(".time-block").each(function () {
        let time = parseInt($(this).attr("id"));
        if (time == currentTime) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
        else if (time < currentTime) {

            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

// on-click set item to local storage using parent container id as key and sibling container as value
var saveTasks = function () {
    $(".saveBtn").click(function () {
        var task = $(this).siblings(".task-container").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, task);
    })
}


loadTasks();
colorChange();
saveTasks();



