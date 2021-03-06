// var userName = prompt("Enter your username");
// alert("username " + userName);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-Input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslation(text){
   return serverURL + "?" + "text=" + text
}

function errorHandler(error){
   console.log("error occured", error);
   alert("Something wrong with the server!!");
}

function clickHandler(){
   var inputTxt = txtInput.value;

   if(inputTxt === ""){
      alert("Please enter input text");
   }
   else{

   fetch(getTranslation(inputTxt))
    .then(response => response.json())
    .then(json => {
       var translatedText = json.contents.translated;
       outputDiv.innerText = translatedText;
        })
    .catch(errorHandler)
      }
}

btnTranslate.addEventListener("click", clickHandler);