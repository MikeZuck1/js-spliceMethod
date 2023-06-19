// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

// FONCTIONS DES TABLEAUX -> .SPLICE(); 
const daysOfWeeks = ['Monday', 'Tuesdays', 'Wednesday', 'Thurdsay', 'Friday'];
daysOfWeeks.splice(5, 0, 'Saturday', 'Sunday'); // le code (.splice()) ajoute 'Saturday' & 'Sunday' 

console.log(daysOfWeeks); 

const booksForReadingThisYear = [
    'Proprement codeur',  
    'ReactJS', 
    'l\'été passe', 
    'La faille', 
    'Rouge Karma', 
    'Zéro contrainte pour maigrir', 
    'À contre sens',
    'Douglas Kennedy',
    'Avoir le courage de ne pas être aimé',  
    'Désenchantée', 
    'La grenouille qui ne savait qu\'elle était cuite',    
]; 

booksForReadingThisYear.splice(3, 3, 'La faiseuse d\'étoile', 'Musset', 'Covid-19', 'Prince Harry', 'Le pouvoir du moment présent'); 
console.log(booksForReadingThisYear);

const seasonOfTheYear = ['Automn', 'Winter']; // je crée une variable seasonOfTheYear et je lui assigne un tableau 
seasonOfTheYear.splice(1, 1, 'Spring', 'Summer'); // .splice ajoute/supprime un (ou des) élément(s) dans le tableau
console.log(seasonOfTheYear); // affiche [ 'Automn', 'Spring', 'Summer', 'Winter' ]

// utiliser .splice avec des arguements négatifs
const compagnieAerienne = ['Brussels Airline', 'Air France', 'Emirates'];
compagnieAerienne.splice(-1, 0, 'Arianna', 'Copa Airline'); // .splice avec une valeur négative -> commence à la fin du tableau
console.log(compagnieAerienne); // [ 'Brussels Airline', 'Air France', 'Arianna', 'Copa Airline', 'Emirates' ]