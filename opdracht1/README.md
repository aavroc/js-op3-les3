# Javascript op3

## Uitleg

In `index.html` is een `div` aangemaakt met een `id="container"`. In `script.js` staat een functie genaamd `showShapes` die een functie aanroept genaamd `addSquareToDom`. De `addSquareToDom` functie veranderd de `innerHTML` property van het container element zodat er een `div` in wordt geplaatst met een class genaamd `square`. Daarnaast wordt via een inline style de achtergrond kleur van de `div` op de waarde "red" gezet.
> De functie `showShapes` wordt aangeroepen als je op de knop klikt maar voor het gemak wordt de functie ook aangeroepen als het document is geladen via de `window.onload` functie bovenaan `script.js`.  

Zoals je ziet levert dit een rood vierkant op. We gaan nu hetzelfde doen maar dan in 4 stappen:  
1. Eerst gebruiken we `document`.`createElement("div")` om een nieuwe HTML div element te maken en slaan we dit op in een variabele genaamd `element`. Zie [Bronnen](#Bronnen) voor een voorbeeld.
2. Dan zetten we de `className` property van dit element op de waarde "square". LETOP: je hebt net het nieuw aangemaakte div element opgeslagen in de variabele `element`. Gebruik de punt notatie om de properties en methods van dit object aan te spreken. `element.className = "";` Zie [Bronnen](#Bronnen) voor een voorbeeld.
3. Om de kleur van het nieuwe element op "red" te zetten gebruiken we `element`.`style`.`backgroundColor` property.
4. Als laatste gaan we het nieuwe element toevoegen aan de DOM en wel als een `child` element van de `container` div. Dit doe je door eerst de `container` div aan te spreken met `document`.`getElementById("container")` en dan via de punt notatie de `appendChild` method op te roepen. De `appendChild` method heeft 1 parameter die mee kunt geven tussen de ( ): dit moet een variabele zijn die een *HTMLElementObject* bevat zoals dat is aangemaakt door de `document`.`createElement` method.

## Opdracht

1. Zorg ervoor dat er een tweede vierkantje wordt getoond in de `container` div.

### Bronnen

[W3 Schools - HTML DOM createElement Method](https://www.w3schools.com/jsref/met_document_createelement.asp)  
[W3 Schools - HTML DOM className Property](https://www.w3schools.com/jsref/prop_html_classname.asp)  
[W3 Schools - HTML DOM appendChild() Method](https://www.w3schools.com/jsref/met_node_appendchild.asp)