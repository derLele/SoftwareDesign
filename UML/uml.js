"use strict";
var UML;
(function (UML) {
    let sentence = prompt("Satz hier hin. LOS!");
    console.log(reverseWords(sentence));
    console.log(reverseSentence(sentence));
    function reverseWords(input) {
        let sentence = input;
        let returnSentence = "";
        let i = 0;
        let splitSentence = sentence.split(" "); //splitSentence muss vom Typ array sein
        while (i < splitSentence.length) { //Zeichendreher, muss < sein
            returnSentence += splitSentence[splitSentence.length - i - 1] + " ";
            //console.log("i: " + i + " " + returnSentence);
            i++;
        }
        return returnSentence;
        //trim fehlt, mit trim error "trim() { [native code] }"
    }
    function reverseSentence(input) {
        let sentence = input;
        let returnSentence = "";
        let i = 1;
        while (i <= sentence.length) { //muss heißen <=, sonst Abrruch eine Stelle zu früh
            returnSentence += sentence.charAt(sentence.length - i);
            //console.log("i: " + i + " " + returnSentence);
            i++;
        }
        return reverseWords(returnSentence) + "\n" + returnSentence;
    }
})(UML || (UML = {}));
//# sourceMappingURL=uml.js.map