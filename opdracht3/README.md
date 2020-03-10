# Javascript op3

## Uitleg

We hebben nu drie functies die elk een ander figuur met een andere kleur toevoegen aan de DOM. Veel van de code in die functies is hetzelfde en regels die anders zijn, zijn alleen maar verschillend omdat er een andere waarde wordt toegekend aan een van de properties van het nieuwe element. Dit kunnen we versimpelen door de verschillende waardes mee te geven aan een meer algemene functie via de parameters van die functie.  

Er is nieuwe functie aangemaakt in `script.js` genaamd `addShapeToDom`. Deze functie heeft twee parameters (`strShape` en `strColor`). De `addShapeToDom` functie wordt al 3 keer aangeroepen vanuit de `showShapes` functie, telkens met andere waarden.

## Opdracht

1. Vul de `addShapeToDom` functie in en gebruik de `strShape` en `strColor` parameters in je code om de juiste waarden mee te geven aan de `className` en `backgroundColor` properties van het nieuwe `div` element. (*De oude 3 functies staan er nog als referentie maar worden niet meer aangeroepen*).
2. We hebben onze codebase wat minder groot gemaakt door slim gebruik te maken van parameters alleen de driehoek komt nu weer niet lekker uit de verf. Voeg een conditie toe in de `addShapeToDom` functie die checked of de `strShape` parameter gelijk is aan "triangle" en zoja de `borderBottomColor` property de `strColor` toekent en zoniet de `backgroundColor` property deze waarde geeft.
3. Zoals je misschien al hebt gezien zijn er in `script.js` ook twee nieuwe Arrays aangemaakt met daarin de strings voor de mogelijke shapes en colors. Pas de `showShapes` functie zo aan dat in de aanroep van de `addShapeToDom` functie niet meer de letterlijke *hardcoded* strings meegeeft maar deze waarden uit de twee arrays haalt.

### Bronnen

[W3 Schools - Access the Elements of an Array](https://www.w3schools.com/js/js_arrays.asp)  
[W3 Schools - HTML DOM createElement Method](https://www.w3schools.com/jsref/met_document_createelement.asp)  
[W3 Schools - HTML DOM className Property](https://www.w3schools.com/jsref/prop_html_classname.asp)  
[W3 Schools - HTML DOM appendChild() Method](https://www.w3schools.com/jsref/met_node_appendchild.asp)