let namesArray = ["Jānis", "Anna", "Zaiga"]
let personAge = 17
function ageCheck(){
    if(personAge>=18){
        console.log("Pilngadīgs!")
    }
    else{
        console.log("Nepilngadīgs")
    }
}
ageCheck()

for(let i=0; i<=2; i++){
console.log(namesArray[i])}

function sayHello(Name){
    console.log("Labdien, " + Name + "!")
}
sayHello("Andrejs")