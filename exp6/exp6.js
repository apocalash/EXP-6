function tim() {
    let d = new Date();
    var time = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
    document.getElementById("clck").innerHTML = time;
}
function strt() {
    setInterval(tim, 1000)
}
function ccol() {
    setInterval(col, 3000)
}
function col() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById("bgc").style.backgroundColor = color;
}
function big() {
    document.getElementById("fs").style.fontSize = "1.5em";
}
function small() {
    document.getElementById("fs").style.fontSize = "1em";
}
var interval;
var pos = 0
function Start() {
    clearInterval(interval);
    car = document.getElementById("c");
    interval = setInterval(CarMove, 20);
}
function Stop() {
    clearInterval(interval);
}
function Reverse() {
    clearInterval(interval);
    interval = setInterval(Moveback, 20);
}
function CarMove() {
    var car = document.getElementById('c');
    pos += 5;
    if (pos <= screen.width) {
        car.style.left = pos + 'px';
    }
    else {
        clearInterval(interval);
    }
}
function Moveback() {
    var car = document.getElementById('c');
    pos -= 5;
    if (pos >= 0) {
        car.style.left = pos + 'px';
    }
    else {
        clearInterval(interval);
    }
}
function ao() {
    document.getElementById("bfr").innerHTML = "Before 2000";
    document.getElementById("aft").innerHTML = "After 2000";
    let student = [{ name: "Basil Mathai", regNo: "URK20CS3001", dob: "22/Dec/2002" },
    { name: "Akumlong Imsong", regNo: "URK20CS2034", dob: "11/Jul/1993" },
    { name: "Rahul Senai", regNo: "URK20CS2045", dob: "11/Jul/1994" },
    { name: "Mohan Babu", regNo: "URK20CS1132", dob: "04/Jan/2003" },
    { name: "Lightning McQueen", regNo: "URK20CS2879", dob: "11/Jul/1999" },
    { name: "Ashish Philip Mathew", regNo: "URK20CS3015", dob: "02/Feb/2002" }
    ]
    for (let i = 0; i < student.length; i++) {
        if (parseInt(student[i].dob.split("/")[2]) < 2000) {
            document.getElementById("before").innerHTML += student[i].name + "\'s " + "Register Number is " + student[i].regNo + " and the DOB is " + student[i].dob + "<br><br>";
        }
        else
            document.getElementById("after").innerHTML += student[i].name + "\'s " + "Register Number is " + student[i].regNo + " and the DOB is " + student[i].dob + "<br><br>";
    }
}