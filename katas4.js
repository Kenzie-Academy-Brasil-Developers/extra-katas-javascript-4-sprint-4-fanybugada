const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

let mainTag = document.createElement("main");
    mainTag.classList.add("mainTag");
document.body.appendChild(mainTag);



const showResults = (output) => {
    let outputOfKata = document.createElement("h4");
        outputOfKata.classList.add("outputOfKata");
        outputOfKata.innerHTML = output;
        mainTag.appendChild(outputOfKata);
}

function kata1() {
    let task = document.createElement("h3");
        task.innerText = "Kata 01: Escreva uma função que **retorna** um array com as cidades em 'gotCitiesCSV'.";
    mainTag.appendChild(task);
    let output = gotCitiesCSV.split(", ");
    return output;
}
    showResults(kata1());


function kata2() {
    let task = document.createElement("h3");
        task.innerText = "Kata 02: Escreva uma função que **retorna** um array das palavras na frase contida em 'bestThing'.";
    mainTag.appendChild(task);
    let output = bestThing.split(" ");
    return output;
}
    showResults(kata2());


function kata3() {
    let task = document.createElement("h3");
        task.innerText = "Kata 03: Escreva uma função que **retorna** uma string separada por ponto-e-vírgulas em vez das vírgulas de 'gotCitiesCSV'.";
    mainTag.appendChild(task);    
    let output = gotCitiesCSV.split(",").join(";");
    return output;
}
    showResults(kata3());

    
function kata4() {
    let task = document.createElement("h3");
        task.innerText = "Kata 04: Escreva uma função que **retorne** uma string CSV (separada por vírgulas) de 'lotrCitiesArray'.";
    mainTag.appendChild(task);    
    let output = lotrCitiesArray.join(",");
    return output;
}
    showResults(kata4());


function kata5() {
    let task = document.createElement("h3");
        task.innerText = "Kata 05: Escreva uma função que **retorna** um array com as 5 primeiras cidades de 'lotrCitiesArray'.";
    mainTag.appendChild(task);    
    let output = lotrCitiesArray.filter( (i, index) => index < 5);
    return output;
}
    showResults(kata5());


function kata6() {
        let task = document.createElement("h3");
            task.innerText = "Kata 06: Escreva uma função que **retorna** um array com as 5 últimas cidades de 'lotrCitiesArray'.";
        mainTag.appendChild(task);    
        let output = lotrCitiesArray.filter( (i, index) => (lotrCitiesArray.length - 5) <= index);
        return output;
    }
        showResults(kata6());


function kata7() {
    let task = document.createElement("h3");
        task.innerText = "Kata 07: Escreva uma função que **retorna** um array contendo da 3ª a 5ª cidades de 'lotrCitiesArray'.";
    mainTag.appendChild(task);    
    let output = lotrCitiesArray.filter( (i, index) => (index >=2 && index < 5) );
    return output;
}
    showResults(kata7());


function kata8() {
    let task = document.createElement("h3");
        task.innerText = "Kata 08: Escreva uma função que use 'splice' para remover 'Rohan' de 'lotrCitiesArray' e **retorne** o novo 'lotrCitiesArray' modificado.";
    mainTag.appendChild(task);    
    lotrCitiesArray.splice(lotrCitiesArray.indexOf("Rohan"), 1);
    return lotrCitiesArray;
}
    showResults(kata8());
    
        
function kata9() {
    let task = document.createElement("h3");
        task.innerText = "Kata 09: Escreva uma função que use 'splice' para remover todas as cidades depois de 'Dead Marshes' de 'lotrCitiesArray' e **retorne** o novo 'lotrCitiesArray' modificado.";
    mainTag.appendChild(task);    
    let removeAfter = lotrCitiesArray.indexOf("Dead Marshes");
    lotrCitiesArray.splice(- (lotrCitiesArray.length - 1 - removeAfter) )
    return lotrCitiesArray;
}
    showResults(kata9());



function kata10() {
    let task = document.createElement("h3");
        task.innerText = "Kata 10: Escreva uma função que use 'splice' para adicionar 'Rohan' de volta ao 'lotrCitiesArray' logo depois de 'Gondor' e **retorne** o novo 'lotrCitiesArray' modificado.";
    mainTag.appendChild(task);    
    let findWord = lotrCitiesArray.indexOf("Gondor");
    lotrCitiesArray.splice(findWord + 1, 0, "Rohan");
    return lotrCitiesArray;
}
    showResults(kata10());


function kata11() {
    let task = document.createElement("h3");
        task.innerText = "Kata 11: Escreva uma função que use 'splice' para renomear 'Dead Marshes' para 'Deadest Marshes' em 'lotrCitiesArray' e **retorne** o novo 'lotrCitiesArray' modificado.";
    mainTag.appendChild(task);    
    let rename = lotrCitiesArray.indexOf("Dead Marshes");
    lotrCitiesArray.splice(rename, 1, "Deadest Marshes");
    return lotrCitiesArray;
}
    showResults(kata11());

    
function kata12() {
    let task = document.createElement("h3");
        task.innerText = "Kata 12: Escreva uma função que usa 'slice' para **retornar** uma string com os primeiros 14 caracteres de 'bestThing'.";
    mainTag.appendChild(task);    
    let output = bestThing.slice(0, 14);
    return output;
}
    showResults(kata12());


function kata13() {
    let task = document.createElement("h3");
        task.innerText = "Kata 13: Escreva uma função que usa 'slice' para **retornar** uma string com os 12 últimos caracteres de 'bestThing'.";
    mainTag.appendChild(task);    
    let output = bestThing.slice(-12);
    return output;
}
    showResults(kata13());


function kata14() {
    let task = document.createElement("h3");
        task.innerText = "Kata 14: Escreva uma função que usa 'slice' para **retornar** uma string com os caracteres entre as posições 23 e 38 de 'bestThing'.";
    mainTag.appendChild(task);    
    let output = bestThing.slice(23, 38);
    return output;
}
    showResults(kata14());


function kata15() {
    let task = document.createElement("h3");
        task.innerText = "Kata 15: Escreva uma função que faz exatamente a **mesma coisa que a #13** mas use o método 'substring' em vez de 'slice'.";
    mainTag.appendChild(task);    
    let output = bestThing.substring(bestThing.length - 12);
    return output;
}
    showResults(kata15());



function kata16() {
    let task = document.createElement("h3");
        task.innerText = "Kata 16: Escreva uma função que faça exatamente a **mesma coisa que o #14** mas use o método 'substring' em vez de 'slice'.";
    mainTag.appendChild(task);    
    let output = bestThing.substring(23, 38);;
    return output;
}
    showResults(kata16());


function kata17() {
    let task = document.createElement("h3");
        task.innerText = "Kata 17: Escreva uma função que use 'pop' para remover a última cidade de 'lotrCitiesArray e **retorne** o novo array.";
    mainTag.appendChild(task);    
    lotrCitiesArray.pop();
    return lotrCitiesArray;
}
    showResults(kata17());


function kata18() {
        let task = document.createElement("h3");
            task.innerText = "Kata 18: Escreva uma função que usa 'push' para adicionar de volta, no final do array, a cidade de 'lotrCitiesArray' que foi removida no #17 e **retorne** o novo array.";
        mainTag.appendChild(task);    
        lotrCitiesArray.push("Deadest Marshes");
        return lotrCitiesArray;
    }
        showResults(kata18());



function kata19() {
    let task = document.createElement("h3");
        task.innerText = "Kata 19: Escreva uma função que usa 'shift' para remover a primeira cidade de 'lotrCitiesArray e **retorne** o novo array.";
    mainTag.appendChild(task);    
    lotrCitiesArray.shift();
    return lotrCitiesArray;
}
    showResults(kata19());  


function kata20() {
    let task = document.createElement("h3");
        task.innerText = "Kata 20: Escreva uma função que use 'unshift' para adicionar de volta, no começo do array, a cidade de 'lotrCitiesArray' que foi removida no #19 e **retorne** o novo array.";
    mainTag.appendChild(task);    
    lotrCitiesArray.unshift("Mordor");
    return lotrCitiesArray;
}
    showResults(kata20());


///////////////////////////// E X T R A S /////////////////////////////////

let katasExtras = document.createElement("h1");
    katasExtras.innerText = "~ Katas Extras de Javascript ~";
    mainTag.appendChild(katasExtras);

function kataExtra1() {
    let task = document.createElement("h3");
        task.innerText = "Kata Extra 1: Escreva uma função que encontre e **retorne** o índice 'only' dentro do array 'bestThing'.";
    mainTag.appendChild(task);    
    return bestThing.indexOf("only");
}
    showResults(kataExtra1());


function kataExtra2() {
    let task = document.createElement("h3");
        task.innerText = "Kata Extra 2: Escreva uma função que encontre e **retorne** o índice da última palavra de 'bestThing'.";
    mainTag.appendChild(task);    
    return bestThing.indexOf( (bestThing.split(" ").slice(-1)) );
}
    showResults(kataExtra2());


        
// function kataExtra3() {
//     let task = document.createElement("h3");
//         task.innerText = "Kata Extra 3: Escreva uma função que encontre e **retorne** um array de todas as cidades de 'gotCitiesCSV' que tiverem vogais duplicadas ('aa', 'ee', etc.).";
//     mainTag.appendChild(task);    
//     let exclua = ;
//    return...
// }
//     showResults(kataExtra3());



function kataExtra4() {
    let task = document.createElement("h3");
        task.innerText = "Kata Extra 4: Escreva uma função que encontre e **retorne** um array com todas as cidades de 'lotrCitiesArray' que terminem em 'or'.";
    mainTag.appendChild(task);    
    return lotrCitiesArray.filter(item => item.endsWith("or"));
}
    showResults(kataExtra4());


function kataExtra5() {
    let task = document.createElement("h3");
        task.innerText = "Kata Extra 5: Escreva uma função que encontre e **retorne** um array com todas as palavras de 'bestThing' começando com 'b'.";
    mainTag.appendChild(task);    
    return bestThing.split(" ").filter(item => item.startsWith("b"));
}
    showResults(kataExtra5());


function kataExtra6() {
    let task = document.createElement("h3");
        task.innerText = "Kata Extra 6: Escreva uma função que **retorne** 'Sim' ou 'Não' se 'lotrCitiesArray' incluir 'Mirkwood'.";
    mainTag.appendChild(task);    
    
    if (lotrCitiesArray.includes("Mirkwood")) {
        return "Sim";
    }
    return "Não";
}
    showResults(kataExtra6());


function kataExtra7() {
    let task = document.createElement("h3");
        task.innerText = "Kata Extra 7: Escreva uma função que **retorne** 'Sim' ou 'Não' se 'lotrCitiesArray' incluir 'Hollywood'.";
    mainTag.appendChild(task);    
    
    if (lotrCitiesArray.includes("Hollywood")) {
        return "Sim";
    }
    return "Não";
}
    showResults(kataExtra7());


function kataExtra8() {
    let task = document.createElement("h3");
        task.innerText = "Kata Extra 8: Escreva uma função que **retorne** o índice de 'Mirkwood' em 'lotrCitiesArray'.";
    mainTag.appendChild(task);    
    return lotrCitiesArray.indexOf("Mirkwood"); 
}
    showResults(kataExtra8());



function kataExtra9() {
    let task = document.createElement("h3");
        task.innerText = "Kata Extra 9: Escreva uma função que encontre e **retorne** a primeira cidade de 'lotrCitiesArray' que tiver mais de uma palavra.";
    mainTag.appendChild(task);    
    return lotrCitiesArray.filter(item => item.includes(" ")).slice(0);
}
    showResults(kataExtra9());


function kataExtra10() {
    let task = document.createElement("h3");
        task.innerText = "Kata Extra 10: Escreva uma função que inverta a ordem de 'lotrCitiesArray' e **retorne** o novo array.";
    mainTag.appendChild(task);    
    return lotrCitiesArray.reverse();
}
    showResults(kataExtra10());


function kataExtra11() {
    let task = document.createElement("h3");
        task.innerText = "Kata Extra 11: Escreva uma função que ordene 'lotrCitiesArray' alfabeticamente e **retorne** o novo array.";
    mainTag.appendChild(task);    
    return lotrCitiesArray.sort();
}
    showResults(kataExtra11());
    

    
function kataExtra12() {
    let task = document.createElement("h3");
        task.innerText = "Kata Extra 12: Escreva uma função que ordene 'lotrCitiesArray' pelo número de caracteres em cada cidade (por exemplo, a cidade mais curta aparece primeiro) e **retorne** o novo array.";
    mainTag.appendChild(task);    
    return lotrCitiesArray.toString().split(",").sort((a, b) => a.length - b.length);
}
    showResults(kataExtra12());

        
        
