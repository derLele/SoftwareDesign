namespace UML{
    let sentence : string = prompt("Satz hier hin. LOS!");

    console.log(reverseWords(sentence));
    console.log(reverseSentence(sentence));

    function reverseWords(input : string){
        let sentence : string = input;
        let returnSentence : string = "";
        let i : number = 0;
        let splitSentence :string[] = sentence.split(" "); //splitSentence muss vom Typ array sein

        while(i < splitSentence.length){ //Zeichendreher, muss < sein
            returnSentence += splitSentence[splitSentence.length -i -1] + " ";
            //console.log("i: " + i + " " + returnSentence);
            i++;
        }
        return returnSentence;
        //trim fehlt, mit trim error "trim() { [native code] }"
    }

    function reverseSentence(input : string){
        let sentence : string = input;
        let returnSentence : string = "";
        let i : number = 1;

        while(i <= sentence.length){ //muss heißen <=, sonst Abrruch eine Stelle zu früh
            returnSentence += sentence.charAt(sentence.length-i);
            //console.log("i: " + i + " " + returnSentence);
            i++;
        }
        return reverseWords(returnSentence) + "\n" + returnSentence;
    }
}