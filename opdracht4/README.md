# Javascript op3

## Uitleg

De shapes en colors die nu worden getoond zijn afhankelijk van de index (0, 1 of 2) die je meegeeft aan de array die je meegeeft als parameter aan de `addShapeToDom` functie in de `showShapes` functie. Makkelijker gezegd: je kunt nu alleen door 1 getal te veranderen een andere shape of color laten zien. Dit getal dat nu *hardcoded* staat ingevuld kunnen we nu ook veranderen naar een random getal. 

Er is in `script.js` een extra functie toegevoegd: `getRandomNumber` die het in Javascript ingebouwde `Math` object gebruikt om een random getal terug te geven.
> Hoe dat precies werkt: eerst geeft `Math.random()` een getal terug tussen de 0 en 1. Bijvoorbeeld 0.384393. Dit getal wordt vermendigvuldigt met 3 zodat het grootste getal dat je kan krijgen 0.999999 * 3 = 2.999997 is ongeveer. De `Math.floor()` functie geeft vervolgens een omlaag (want `.floor()`) afgerond getal terug. Dit is altijd 0, 1 of 2.

## Opdracht

1. Pas `addShapeToDom` functies die worden aangeroepen in de `addShapes` functie zo aan dat het getal dat wordt meegeven aan de array niet meer 0, 1 of 2 is maar dat de functie `getRandomNumber()` wordt aangeroepen. 

### Bronnen

[W3 Schools - HTML DOM createElement Method](https://www.w3schools.com/jsref/met_document_createelement.asp)  
[W3 Schools - HTML DOM className Property](https://www.w3schools.com/jsref/prop_html_classname.asp)  
[W3 Schools - HTML DOM appendChild() Method](https://www.w3schools.com/jsref/met_node_appendchild.asp)