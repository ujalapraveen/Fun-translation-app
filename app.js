var buttentranslator = document.querySelector("#butn-translate");
var textinput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output")
var serverURL = "https://api.funtranslations.com/translate/chef.json"

function getTranslatorUrl(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log(error);
    alert("something went worng with server! try again later")
}

function clickEventHandler() {
    var inputTxt = textinput.value;
    fetch(getTranslatorUrl(inputTxt))
        .then(response => response.json())
        .then(json => {
                var tarnslatedText = json.contents.translated;
                outputDiv.innerText = tarnslatedText
            })
            .catch(errorHandler)
        };
    buttentranslator.addEventListener("click", clickEventHandler);



