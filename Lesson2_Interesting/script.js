// import { Button } from "selenium-webdriver";

var ungu = ["#55efc4", "#81ecec", "#74b9ff", "#a29bfe", "#00b894", "#00cec9", "#0984e3", "#6c5ce7", "#ffeaa7", "#fab1a0", "#ff7675", "#fd79a8", "#fdcb6e", "#e17055", "#d63031", "#e84393"];
i = 0;
document.querySelector("button").addEventListener("click",
    function(){
        i = i < ungu.length ? ++i : 0;
        document.querySelector("body").style.background = ungu[i]
})