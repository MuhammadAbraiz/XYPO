const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
});

function voice(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang="en-GB";
    recognition.onresult = function(event){
        console.log(event);
document.getElementById("speechToText").value =
 event.results[0][0].transcript;
    }
    recognition.start();

}