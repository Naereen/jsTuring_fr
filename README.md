# jsTuring_fr : simulateur de Machines de Turing en HTML/Javascript

Ce dépôt est une simple traduction en français du [simulateur de Machines de Turing](http://morphett.info/turing/) en HTML/Javascript écrit par [Anthony Morphett](http://morphett.info/).

Vous pouvez jouer avec cette version traduite à l'adresse : https://naereen.github.io/jsTuring_fr/turing.html ([ici](https://naereen.github.io/jsTuring_fr/turing.html)).
Toutes les explications nécessaires sont fournis dans cette page.

----

> Le reste de ce document explique l'organisation des fichiers constituant le simulateur.
> Si vous voulez juste vous en servir, allez [ici](https://naereen.github.io/jsTuring_fr/turing.html).

## Organisation du dépôt

### Page web (fichiers HTML)
- [turing.html](https://naereen.github.io/jsTuring_fr/turing.html) ([code de turing.html](turing.html)) : page web pour le simulateur.

### Exemples de Machines
- Dans le dossier [machines](machines/), chaque fichier `.txt` est un exemple de machine de Turing.
<!-- TODO translate the given examples ? At least change 0 to q0 -->

### Scripts (Javascript)
- [`jsturing.js`](js/jsturing.js): Main Javascript code for the Turing machine

#### Dépendances
- [`jquery-1.11.1.js`](js/jquery-1.11.1.js), [`jquery-1.11.1.min.js`](js/jquery-1.11.1.min.js): JQuery file, used by jsturing.js

### Feuilles de style (CSS)
- [`turing.css`](css/turing.css) : style pour les éléments de [turing.html](https://naereen.github.io/jsTuring_fr/turing.html).
- [`textarea.css`](css/textarea.css) : style pour le surlignage des lignes 'Suivante' et 'Précédente' dans la zone de texte du programme de la machine.

#### Support d'Internet Explorer
- [`ie-fixes.css`](css/ie-fixes.css), [`polyfills.js`](js/polyfills.js), [`json2.js`](js/json2.js) : Corrections de bogues pour supporter les vieilles versions d'Internet Explorer (< 10).

----

## :scroll: Licence ? [![GitHub license](https://img.shields.io/github/license/Naereen/jsTuring_fr.svg)](https://github.com/Naereen/jsTuring_fr/blob/master/LICENSE)
Distribué sous la [licence libre MIT](https://lbesson.mit-license.org/) (fichier [LICENSE](LICENSE) en anglais).

© 2016 [Anthony Morphett](http://morphett.info/) ([@awmorp](https://GitHub.com/awmorp/)) pour tout, et © 2016 [Lilian Besson](https://GitHub.com/Naereen) pour la traduction.

[![Maintenance](https://img.shields.io/badge/Maintenu%3F-oui-green.svg)](https://GitHub.com/Naereen/jsTuring_fr/graphs/commit-activity)
[![Demandez moi n'importe quoi !](https://img.shields.io/badge/Demandez%20moi-n'%20importe%20quoi-1abc9c.svg)](https://GitHub.com/Naereen/ama.fr)
[![Analytics](https://ga-beacon.appspot.com/UA-38514290-17/github.com/Naereen/jsTuring_fr/README.md?pixel)](https://GitHub.com/Naereen/jsTuring_fr/)

[![ForTheBadge uses-badges](http://ForTheBadge.com/images/badges/uses-badges.svg)](http://ForTheBadge.com)
[![ForTheBadge uses-git](http://ForTheBadge.com/images/badges/uses-git.svg)](https://GitHub.com/)

[![ForTheBadge uses-css](http://ForTheBadge.com/images/badges/uses-css.svg)](http://ForTheBadge.com)
[![ForTheBadge uses-html](http://ForTheBadge.com/images/badges/uses-html.svg)](http://ForTheBadge.com)
[![ForTheBadge uses-js](http://ForTheBadge.com/images/badges/uses-js.svg)](http://ForTheBadge.com)

[![ForTheBadge built-with-science](http://ForTheBadge.com/images/badges/built-with-science.svg)](https://GitHub.com/Naereen/)
