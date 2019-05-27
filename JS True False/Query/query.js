
var zurag = [
            "url(1.jpg)", 
            "url(2.jpg)", 
            "url(3.jpg)", 
            "url(4.jpg)", 
            "url(5.jpg)", 
            "url(6.jpg)", 
            "url(7.jpg)"
            ];
    i = 0;
    document.querySelector("button").addEventListener("click",
    function(){
        i = i < zurag.length ? ++i : 0;
        document.querySelector("body").style.background = zurag[i]
})
var ungu = [
        "#ef5777" , 
        "#575fcf" , 
        "#4bcffa" , 
        "#34e7e4" , 
        "#0be881" , 
        "#ffc048" , 
        "#485460"
    ];
var i = 0;
function first(){
    i = i < ungu.length ? ++i : 0;
    document.querySelector(".oorch , #text").style.background = ungu[i]
}
function second(){
    document.querySelector("#text").innerHTML = "Okey I change it"
}
i = 0;
function three(){
    i = i < ungu.length ? ++i : 0;
    document.querySelector("#text").style.color = ungu[i]
}
