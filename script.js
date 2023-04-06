const textToType = document.querySelector('#text-to-type');
let currentIndex = 0;

// affiche le texte à dactylographier dans le conteneur
textToType.textContent = "Ceci est un texte à dactylographier. Essayez de taper les caractères correspondants. Bonne chance !";

// écoute les événements de touche tapée dans l'input
document.addEventListener('keydown', function(e) {
  // empêche la saisie de caractères dans l'input
  e.preventDefault();

  // compare le caractère tapé avec le caractère attendu
  if (e.key === textToType.textContent[currentIndex]) {
    // met en évidence le caractère correctement tapé
    textToType.innerHTML = textToType.innerHTML.slice(0, currentIndex) + '<span class="correct">' + textToType.innerHTML[currentIndex] + '</span>' + textToType.innerHTML.slice(currentIndex + 1);
    
    currentIndex++;

    // fait défiler le texte si nécessaire
    if (currentIndex > 10) {
      textToType.style.marginTop = '-' + (currentIndex - 10) * 30 + 'px';
    }
  } else {
    // met en évidence le caractère incorrectement tapé
    textToType.innerHTML = textToType.innerHTML.slice(0, currentIndex) + '<span class="incorrect">' + textToType.innerHTML[currentIndex] + '</span>' + textToType.innerHTML.slice(currentIndex + 1);
  }
});
