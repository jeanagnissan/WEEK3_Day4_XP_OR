

let userString = prompt("Entré un texte cour");
let convUserLang = userString.toLowerCase();

let positI = convUserLang.length - 3;
// let positN = convUserLang.length - 2;
// let positG = convUserLang.length - 1;

let stringFinish = convUserLang.substr(positI);;

if( !parseFloat(convUserLang) ) {
    if (convUserLang.length >= 3) {
        if (stringFinish == "ing") {
            alert(`${convUserLang}ly`);
        } else{
            alert(`${convUserLang}ing`);
        }
    } else {
        alert(convUserLang);
    }
}
