var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error accured", error);
    alert("somthing wrong with server! try again after some time")
}

function successHandler(hello) {
    console.log(hello.contents.translated)
    console.log(outputDiv)
    outputDiv.innerHTML = hello.contents.translated
}


function clickHandler() {
    var inputText = txtInput.value;
    console.log(inputText);
    const url = serverURL + "?" + "text=" + inputText;
    console.log(url)


    fetch(url)
        .then(response => response.json())
        .then(successHandler)
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)