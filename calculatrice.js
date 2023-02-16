let chiffreEnCours = '';
let operateurEnCours = '';
let resultatEnCours = null;
const resultat = document.getElementById('resultat');

function ajouterChiffre(chiffre) {
  chiffreEnCours += chiffre;
  resultat.value = chiffreEnCours;
}

function ajouterPoint() {
  if (chiffreEnCours.indexOf('.') === -1) {
    chiffreEnCours += '.';
    resultat.value = chiffreEnCours;
  }
}

function effacer() {
  chiffreEnCours = '';
  operateurEnCours = '';
  resultatEnCours = null;
  resultat.value = '';
}

function addition() {
  operateurEnCours = '+';
  resultatEnCours = Number(chiffreEnCours);
  chiffreEnCours = '';
}

function soustraction() {
  operateurEnCours = '-';
  resultatEnCours = Number(chiffreEnCours);
  chiffreEnCours = '';
}

function multiplication() {
  operateurEnCours = '*';
  resultatEnCours = Number(chiffreEnCours);
  chiffreEnCours = '';
}

function division() {
  operateurEnCours = '/';
  resultatEnCours = Number(chiffreEnCours);
  chiffreEnCours = '';
}

function egal() {
    if (operateurEnCours === '+') {
      resultatEnCours += Number(chiffreEnCours);
    } else if (operateurEnCours === '-') {
      resultatEnCours -= Number(chiffreEnCours);
    } else if (operateurEnCours === '*') {
      resultatEnCours *= Number(chiffreEnCours);
    } else if (operateurEnCours === '/') {
      resultatEnCours /= Number(chiffreEnCours);
    } else {
      resultatEnCours = Number(chiffreEnCours);
    }
    chiffreEnCours = '';
    operateurEnCours = '';
    resultat.value = resultatEnCours;
  }
  