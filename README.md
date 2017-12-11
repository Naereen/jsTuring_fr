# jsTuring_fr : simulateur de Machines de Turing en HTML/Javascript

Ce dépôt est une simple traduction en français du [simulateur de Machines de Turing](http://morphett.info/turing/) en HTML/Javascript écrit par [Anthony Morphett](http://morphett.info/).

Vous pouvez jouer avec cette version traduite à l'adresse : https://naereen.github.io/jsTuring_fr/turing.html ([ici](https://naereen.github.io/jsTuring_fr/turing.html)).
Toutes les explications nécessaires sont fournies dans cette page.

----

## Démonstration interactive
![Demo - Interactive GIF](screenshots/demo_live.gif)

----

> Le reste de ce document explique l'organisation des fichiers constituant le simulateur.
> Si vous voulez juste vous en servir, allez [ici](https://naereen.github.io/jsTuring_fr/turing.html).

## Organisation du dépôt

### Interface web pour le simulateur
- [`turing.html`](https://naereen.github.io/jsTuring_fr/turing.html) ([`code de turing.html`](turing.html)) : page web pour le simulateur. Elle peut être ouverte localement (depuis votre disque, si vous avez [télécharger et extrait]() le simulateur)

### Exemples de machines ?
- Dans le dossier [`machines/`](machines/), chaque fichier `.txt` est un exemple de machine de Turing. Par exemple : [`concatenate.txt`](https://github.com/Naereen/jsTuring_fr/blob/gh-pages/machines/concatenate.txt) est une machine qui transforme `1111..1_111..1` = `1^n_1^m` en `1^(n+m) = 111....11` (de taille `n+m`).
- La documentation pour la machine de Turing universelle se trouve [dans ce fichier PDF (par David Bevan)](utm.pdf).

### Scripts (Javascript)
- [`jsturing.js`](js/jsturing.js) : programme principal, en Javascript, pour le simulateur de machines de Turing. Complexe, mais très commenté.
- [`notify.js`](js/notify.js) : petit programme pour afficher des notifications bureau (quand la machine a terminé le calcul, par exemple).

#### Dépendances
- [`jquery-1.11.1.js`](js/jquery-1.11.1.js), [`jquery-1.11.1.min.js`](js/jquery-1.11.1.min.js) : JQuery, requis par [`jsturing.js`](js/jsturing.js)

### Feuilles de style (CSS)
- [`turing.css`](css/turing.css) : style pour les éléments de [turing.html](https://naereen.github.io/jsTuring_fr/turing.html).
- [`textarea.css`](css/textarea.css) : style pour le surlignage des lignes 'Suivante' et 'Précédente' dans la zone de texte du programme de la machine.

#### Support d'Internet Explorer ?
- [`ie-fixes.css`](css/ie-fixes.css), [`polyfills.js`](js/polyfills.js), [`json2.js`](js/json2.js) : Corrections de bogues pour supporter les vieilles versions d'Internet Explorer (< 10).
- Normalement, n'importe quel navigateur assez récent suffit à utiliser [`turing.html`](https://naereen.github.io/jsTuring_fr/turing.html) (mais tout le monde sait que [Mozilla Firefox](https://www.mozilla.org/fr/firefox/new/) est le meilleur navigateur).

----

### Bonus
- [Certaines machines](https://github.com/Naereen/jsTuring_fr/search?q=TP4&type=Code&utf8=✓) sont les solutions d'un TP donné à l'[ENSAI, Rennes](http://www.ensai.fr/) en novembre 2016 : [TP4 - Q3.1](https://github.com/Naereen/jsTuring_fr/blob/gh-pages/machines/TP4--Q3-1.txt), [Q3.2](https://github.com/Naereen/jsTuring_fr/blob/gh-pages/machines/TP4--Q3-2.txt), [Q3.3](https://github.com/Naereen/jsTuring_fr/blob/gh-pages/machines/TP4--Q3-3.txt), [Q3.4](https://github.com/Naereen/jsTuring_fr/blob/gh-pages/machines/TP4--Q3-4.txt), [Q3.5](https://github.com/Naereen/jsTuring_fr/blob/gh-pages/machines/TP4--Q3-5.txt), [Q3.6](https://github.com/Naereen/jsTuring_fr/blob/gh-pages/machines/TP4--Q3-6.txt).

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
