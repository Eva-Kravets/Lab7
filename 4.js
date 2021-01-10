let year = prompt("¬ведите год:");
let visokosny = (year % 4 == 0) || (year % 100 == 0) && (year % 400 == 0) ? true : false;
alert(visokosny);