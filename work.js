let text = "\"My name is \"shanzay\" .\"";
let ok = "I\'m ok . and i wanna use \\ here."
document.getElementById('demo1').innerHTML = text;
document.getElementById('demo2').innerHTML = ok;
document.getElementById('demo3').innerHTML = ok.length;

function myFunction(f, t) {
    document.getElementById('demo4').innerHTML = `The value of ${f} and value of ${t} is undefined .`
}

function myLove(g, h) {
    return g * h;
}

function dard(a) {
    return a;
}
document.getElementById('demo6').innerHTML = "So, the value of a= " + dard(10) + ".";
// For object properties or object literals
const Person = {
    fullName: "Shanzay",
    Age: "20",
    love: "Cars"
}

document.getElementById('demo7').innerHTML = "My name is " + Person.fullName + " amd my age is " + Person.Age + ".";

// For new keyword 
const lover=new Object;
lover.name="shanzay";
lover.age="20";
lover.degree="BS cs";
document.getElementById('demo8').innerHTML="LOVER: " + lover.name;

// For object method
const Kids={
    nam:"mary",
    age:"14",
    mentalHealth:function(){
        return "That i love " + Kids.nam + ".";
    } 
};
// now making copy
let nawi=Kids;
nawi.age=15;
document.getElementById('demo9').innerHTML=Kids.mentalHealth();
document.getElementById('demo10').innerHTML=nawi.age;


