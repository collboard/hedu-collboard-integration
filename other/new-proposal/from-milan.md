Ahoj,

prošel jsem typy v seznamu, s pomocí chatGPT k nim vygeneroval example a to všechno převedl do html, které se používá pro export do collboardu.

Zatím to mám jen lokálně, v příloze je html, které by šlo do collboardu. Mrkni na to a dej vědět jestli je to takhle ok.

Každá položka má data attributy

-   data-hedu-env-item-id - unikátní ID
-   data-hedu-env-item-attributes - attributy v serializovaném jsonu

Když nad html zavoláš

```javascript
Array.from(document.querySelectorAll('[data-hedu-env-item-id]')).map((envItem) => ({
    id: envItem.getAttribute('data-hedu-env-item-id'),
    attributes: JSON.parse(envItem.getAttribute('data-hedu-env-item-attributes')),
}));
```

získáš pole id prvků jejich atributů.

Jednotlivé atributy jsou:

type:

```
    'grid',
    'tile/mono',
    'tile/duo',
    'tile/3I',
    'tile/4I',
    'tile/four',
    'tile/square',
    'tile/corner',
    'tile/L',
    'tile/L-left',
    'tile/flash',
    'tile/rightflash',
    'tile/H',
    'tile/Z',
    'tile/T',
    'tile/steamship',
    'tile/tractor',
    'tile/d',
    'tile/cruiser',
    'stick',
    'train',
    'shape/square',
    'shape/circle',
    'shape/triangle',
    'shape/star',
    'shape/envelope',
    'shape/cube',
```

rotation má hodnoty

```
'0', '90', '180', ‘270'
```

amount má hodnoty -1, 0 , 1
tady netuším co která hodnota znamená

interactive: 0, 1

snapable: 0,1

color: html colors

Hodnoty jsou předně tak jak je zadávají editoři, jen u barev zajistím, že pojmenované barvy (hmat-red) budou převedeny na HTML barvu.

Nevím jak dobře jsou v úlohách tyto atributy vyplněny, určitě si pro ně pak musíme nastavit defaulní hodnoty a určit si na které straně implementace budou.

V pondělí můžem probrat jestli je to takhle ok, které atributy potřebuješ a které můžem případně ignorovat.

Díky

Milan
