
    var ungu = ["url(1.jpg)", "url(2.jpg)", "url(3.jpg)", "url(4.jpg)", "url(5.jpg)", "url(6.jpg)", "url(7.jpg)"];
        i = 0;
    document.querySelector("button").addEventListener("click",
    function(){
        i = i < ungu.length ? ++i : 0;
        document.querySelector("body").style.background = ungu[i]
})
