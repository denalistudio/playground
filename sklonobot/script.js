function jeSouhlaska(char){
    return "aáeéěiíoóuúůyý".indexOf(char) === -1;
}
 
function patyPad(jmeno){
    var delka = jmeno.length;
 
    // Výjimka! Změna "ek" na "ku"
    if (jmeno.substr(-2, 2) === "ek"){
        return jmeno.slice(0, -2) + "ku";
    }
    
    //Výjimka! Změna "el" na "le" nebo "eli"
    if(jmeno.substr(-2,2) === "el"){
        
        //Zkontroluj, jestli je před "el" souhláska nebo samohláska
        if(jeSouhlaska( jmeno.substr(-3,1) )){
            //souhláska
            
            //Výjimka z výjimky! Věnováno všem Marcelům!
            if(jeSouhlaska( jmeno.substr(-4,1) )){
                return jmeno + "i";
            }else{
                return jmeno.slice(0, -2) + "le";
            }
        }else{
            //samohláska
            return jmeno + "i";
        }
    }
    
    //Výjimka (skara, jak já to slovo nesnáším)! Změna "r" po souhlásce na "ře"
    if(jmeno[delka - 1] === "r"){
        if(jeSouhlaska( jmeno.substr(-2,1) )){
            return jmeno.slice(0,-1) + "ře";
        }
    }
 
    //Pokud nepodléhá výjimce, pokračuj:
    switch (jmeno[delka - 1]) { //rozhoduj podle posl. písmena
        case "á":
        case "e":
        case "é":
        case "i":
        case "í":
        case "o":
        case "y":
            //tohle jméno se neskloňuje
            return jmeno;
 
        case "g":
        case "h":
        case "k":
        case "q":
            //k tomuhle jménu se přidává "u"
            return jmeno + "u";
 
        case "č":
        case "j":
        case "ř":
        case "s":
        case "š":
        case "x":
        case "z":
            //k tomuhle jménu se přidává "i"
            return jmeno + "i";
 
        case "a":
        case "u":
            //tady se posl. písmeno mění na "o"
            return jmeno.slice(0, -1) + "o";
 
        case "c":
            //změna "c" na "če"
            return jmeno.slice(0, -1) + "če";
 
        case "ď":
            //změna "ď" na "di"
            return jmeno.slice(0, -1) + "di";
 
        case "ň":
            //změna "ň" na "ni"
            return jmeno.slice(0, -1) + "ni";
 
        case "ť":
            //změna "ť" na "ti"
            return jmeno.slice(0, -1) + "ti";
 
        default:
            //všechno ostatní končí na "e"
            return jmeno + "e";
 
    }
}