# Javascript op3

## Uitleg

We gaan nu nog twee figuren toevoegen aan de `container` div. Een groene cirkel en een blauwe driehoek.

## Opdracht

1. Vul de functies `addCircleToDom` en `addTriangleToDom` verder in. Zorg ervoor dat in de `addCircleTodom` functie het aangemaakte element de className als waarde "circle" krijgt en als backgroundColor de waarde "green" krijgt. Idem dito voor de `addTriangleToDom` functie ("triangle" en "blue").
> LETOP: voordat het werkt moet je ook de twee nieuw ingevulde functie aanroepen vanuit de `showShapes` functie! 
2. Ziet er goed uit, alleen de driehoek is een beetje vreemd. Dit komt omdat de driehoek gemaakt is door drie borders aan te maken (left, right en bottom) waarvan alleen de bottom border een kleur heeft. Zie `style.css` om te zien hoe dit werkt. Om toch een mooie blauwe driehoek te krijgen: verander de property die wordt ingesteld op "blue" in de `addTriangleToDom` functie van `backgroundColor` naar `borderBottomColor`.

### Bronnen

[W3 Schools - HTML DOM createElement Method](https://www.w3schools.com/jsref/met_document_createelement.asp)  
[W3 Schools - HTML DOM className Property](https://www.w3schools.com/jsref/prop_html_classname.asp)  
[W3 Schools - HTML DOM appendChild() Method](https://www.w3schools.com/jsref/met_node_appendchild.asp)