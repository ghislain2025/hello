// Script JavaScript pour hello
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Bienvenue dans hello !');
    // Exemple : Ajouter un bouton interactif
    const button = document.createElement('button');
    button.textContent = 'Cliquez-moi';
    button.addEventListener('click', () => alert('Bonjour !'));
    document.querySelector('main').appendChild(button);
  });