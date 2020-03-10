
/* let week = prompt("Please enter the day:");

let work = ["monday", "tuesday", "wednesday", "thursday", "friday"];
work.toLowerCase()

let weekend = ["saturday", "sunday"];
weekend.toLowerCase()

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

switch (week.toLowerCase()){
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        alert("Working day")
        break;
    case "saturday":
    case "sunday":
        alert("Weekend")  
        break;
    default:
        alert("Can not define, please try another value")
        break;                
}