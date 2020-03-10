# Javascript op3

## Uitleg

Als je nu de pagina ververst worden er telkens 3 random shapes met 3 random colors neergezet. Maar wat gebeurt er als je de knop gebruikt om de `showShapes` functie aan te roepen? Er worden alleen maar meer shapes toegevoegd aan de DOM. Om de knop goed te kunnen gebruiken zou het handig zijn als er voordat er nieuwe shapes worden toegevoegd de oude eerst worden verwijderd. 

Je kunt op meerdere manieren de al aangemaakte shapes verwijderen uit de DOM. Dit kan door de `element`.`removeChild` method te gebruiken. Dit zou netjes zijn maar zorgt ook weer voor veel meer stappen en complexiteit.

## Opdracht

1. Er is een nieuwe functie genaamd `removePreviousShapes` toegevoegd. Zorg ervoor dat de `innerHTML` property van de `container` div een waarde krijgt van een lege string (""). 
2. Zorg ervoor dat `removePreviousShapes` functie wordt aangeroepen in de `showShapes` functie *voor* je de nieuwe shapes aan de DOM toevoegd met de `addShapesToDom` functie.

> Alleen de eerst keer dat de shapes worden toegevoegd zet je onnodig de `innerHTML` property van de `container` div op een lege string. Eigenlijk wil je onnodige code vermijden maar de code doet wat je wilt, de onnodige code kost praktisch nul extra rekenkracht, sterker nog, het is voor iedereen meteen duidelijk wat de code doet. We kunnen altijd later de `removePreviousShape` functie nog aanpassen als dat nodig mocht zijn.

### Bronnen

[W3 Schools - HTML DOM createElement Method](https://www.w3schools.com/jsref/met_document_createelement.asp)  
[W3 Schools - HTML DOM className Property](https://www.w3schools.com/jsref/prop_html_classname.asp)  
[W3 Schools - HTML DOM appendChild() Method](https://www.w3schools.com/jsref/met_node_appendchild.asp)