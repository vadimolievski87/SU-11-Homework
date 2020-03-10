
/* let week = prompt("Please enter the day:");

let work = ["monday", "tuesday", "wednesday", "thursday", "friday"];

let weekend = ["saturday", "sunday"];

if (work.includes(week)){
    alert("Working Day")
    console.log(week.includes(work))
}else if (weekend.includes(week)){
    alert("Weekend")
    console.log(week.includes(weekend))
}else{
    alert("Can not define, please try another value")
}; */



let week = prompt("Please enter the day:");

let work = ["monday", "tuesday", "wednesday", "thursday", "friday"];

let weekend = ["saturday", "sunday"];

switch (week){
    case "monday":
        alert("Working day")
        break;
    case "tuesday":
        alert("Working day")
        break;
    case "wednesday":
        alert("Working day")
        break;
    case "thursday":
        alert("Working day")
        break;
    case "tuesday":
        alert("Working day")
        break;
    case "friday":
        alert("Working day")
        break;
    case "saturday":
        alert("Weekend")
        break;
    case "sunday":
        alert("Weekend")  
        break;
    default:
        alert("Can not define, please try another value")
        break;                
}