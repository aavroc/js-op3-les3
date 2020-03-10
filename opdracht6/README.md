# Javascript op3

## Uitleg

Je kan met behulp van Javascript ook kopien maken van DOM elementen en deze dan weer op een nieuwe plek toevoegen aan de DOM.

In `index.html` is een extra div gemaakt met als id `history`. In `script.js` is een functie aangemaakt genaamd `addPreviousShapesToDom` die een kopie maakt van de `container` div (met alle child elementen) en deze toevoegd aan de DOM met de `element`.`appendChild` method (als child van de `history` div).

De nieuwe `addPreviousShapesToDom` functie wordt als eerste aangeroepen in de `addShapes` functie.

Het enige minpuntje is dat de lege `container` div ook wordt gekopieerd en in de `history` div wordt geplaatst.

## Opdracht

1. Zorg ervoor dat de lege `container` div niet meer wordt getoond. 
> Hiervoor moet je een beetje creatief zijn. Een gemakkelijke manier is om een globale boolean variabele aan te maken die bijhoudt of de `addShapes` functie al een keer is aangeroepen. In de `addShapes` functie kun je dan een if statement maken met als conditie de globale boolean variabele. Vergeet niet de boolean ergens in de `addShapes` functie een andere waarde te geven.

> Als bovenstaande *bug* is opgelost: onderstaande drie opdrachten vergen heel wat denkwerk. Het makkelijkste is om de verschillende random waarden die worden gegenereerd voor een shape en een kleur op te slaan in arrays en die waarden uit die arrays te gebruiken binnen de condities van je if-elseif-else statements. Vergeet niet de arrays weer leeg te maken voor je de nieuwe shapes op het scherm zet. Er zijn al twee globale arrays toegevoegd aan `script.js` die je kunt vullen met de `array`.`push` method.

1. Schrijf een functie genaamd `checkShapes` die controleert of er meerdere dezelfde shapes worden getoond. Als er bijvoorbeeld twee dezelfde worden getoond output dan via `console`.`log` een string die dit aangeeft en wat voor shape dubbel is, bv. "Er zijn 2 cirkels!". Uiteraard: roep de `checkShapes` functie aan vanuit het einde van de `showShapes` functie.
2. Pas de `checkShapes` functie zo aan dat niet alleen de shapes worden gechecked maar ook de kleur.
3. Voeg toe dat er ook gechecked wordt op 3 dezelfde shapes en kleur.

### Bronnen
[W3 Schools - HTML DOM cloneNode() Method](https://www.w3schools.com/jsref/met_node_clonenode.asp)  
[W3 Schools - HTML DOM createElement Method](https://www.w3schools.com/jsref/met_document_createelement.asp)  
[W3 Schools - HTML DOM className Property](https://www.w3schools.com/jsref/prop_html_classname.asp)  
[W3 Schools - HTML DOM appendChild() Method](https://www.w3schools.com/jsref/met_node_appendchild.asp)