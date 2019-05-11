function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText = num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if (num == ""){
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}
// garaltand too add hiih
function getFormattedNumber(num){
    if (num == "-"){
        return "";
    }
    var n = Number(num); // n bol too baihiig zaaj bna
    var value = n.toLocaleString("en"); // english toonii zagwaraar jich 0,000,000 geh met
    return value;
}
// replace ashiglalaa
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function() {
        // alert("operator towchiig darlaa" + this.id);
        if (this.id == "clear"){
            printHistory("");
            printOutput("");
        }
        else if (this.id == "backspace"){
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length-1);
                printOutput(output);
            }
        }
        else {
            var output = getOutput();
            var history = getHistory();
            if (output == "" && history != ""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0, history.length-1);
                }
            }
            if (output != "" || history != ""){
                // ? unen hudal checklene
                output = output == "" ? output: reverseNumberFormat(output);
                history = history + output;
                if (this.id == "="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++){
    number[i].addEventListener('click', function() {
        // alert("number towchiig darlaa: "+this.id);
        var output = reverseNumberFormat(getOutput());
        if (output != NaN){ // hervee output ni too bol
            output = output + this.id;
            printOutput(output);
        }
    });
}