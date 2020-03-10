# Op3 - Javascript - Les 3

## Leerdoelen

1. [ ] Ik weet wat het Document Object Model (DOM) is.
2. [ ] Ik kan een nieuw HTML element aanmaken met de `element`.`createElement` method.
3. [ ] Ik kan de `className` property van een HTML element aanpassen.
4. [ ] Ik kan een nieuw HTML element toevoegen aan de DOM met de `element`.`appendChild` method.
5. [ ] Ik heb gezien hoe je een kopie van een HTML element maakt met de `element`.`cloneNode` method.

## Onderwerp

De HTML code die je schrijft wordt door je browser omgezet in een boomstructuur genaamd het Document Object Model, kortweg de DOM. Zie onderstaande representatie:

![De DOM](img/html-dom.jfif)

Elk element in de boomstructuur wordt door Javascript gezien als een Object met een aantal properties en methods. (eigenschappen en methoden). Je kan met Javascript alle objecten in de DOM aanspreken en de properties daarvan veranderen of door de methodes aan te roepen allerlei dingen doen.

> Elk knooppunt in een boomstructuur noem je een `node` en elke `node` heeft een `parent` en 1 of meerdere `child` nodes. In bovenstaand voorbeeld plaatje is `<body>` dus de `parent` van de `<img>` en `<p>` nodes en zijn de `<img>` en `<p>` nodes `child` nodes van de `body` node.

Tot nu toe hebben we de DOM aangepast door bijvoorbeeld de `innerHTML` property van een element te veranderen:

```javascript
document.getElementById("idnaam").innerHTML = "text";
document.getElementById("idnaam").innerHTML = "<div>Text in een div</div>";
```

In bovenstaande code is `document` een Object (dit Object representeert het gehele HTML document dat is ingeladen in je browser) waarvan we de method `getElementById` gebruiken om een HTML element aan te spreken om vervolgens de `innerHTML` property een nieuwe waarde te geven.  

In het tweede regel van de voorbeeld code voegen we een `div` toe aan de `innerHTML` property van een HTML element door letterlijk HTML code in de string te verwerken. Dit is een beetje een hacky manier om een HTML element toe te voegen aan de DOM. Als je dit veel doet wordt je code al snel onoverzichtelijk en je mist de *syntax highlighting* die je normaal hebt als je HTML code edit waardoor je minder gemakkelijk fouten ziet.

In deze les gaan we zien wat voor manieren er nog meer zijn om elementen toe te voegen aan een webpagina door met Javascript de DOM te manipuleren.

## Bronnen

[W3 Schools - Javascript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)  
[W3 Schools - HTML DOM createElement Method](https://www.w3schools.com/jsref/met_document_createelement.asp)  
[W3 Schools - HTML DOM className Property](https://www.w3schools.com/jsref/prop_html_classname.asp)  
[W3 Schools - HTML DOM appendChild() Method](https://www.w3schools.com/jsref/met_node_appendchild.asp)  
[W3 Schools - HTML DOM cloneNode() Method](https://www.w3schools.com/jsref/met_node_clonenode.asp)
