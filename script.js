// Fonction pour activer la touche de clavier correspondante
function activateKey(keyCode) {
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!key) return; // Si la touche n'est pas trouvée, on sort de la fonction
  key.classList.add('active');
}

// Fonction pour désactiver la touche de clavier correspondante
function deactivateKey(keyCode) {
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!key) return; // Si la touche n'est pas trouvée, on sort de la fonction
  key.classList.remove('active');
}

// Fonction pour afficher le caractère correspondant à la touche de clavier
function displayCharacter(char) {
  const display = document.querySelector('#display');
  display.textContent += char;
}

// Événement pour activer la touche de clavier lorsqu'elle est enfoncée
window.addEventListener('keydown', (e) => {
  activateKey(e.keyCode);
});

// Événement pour désactiver la touche de clavier lorsqu'elle est relâchée
window.addEventListener('keyup', (e) => {
  deactivateKey(e.keyCode);
});

// Événement pour afficher le caractère correspondant à la touche de clavier lorsqu'elle est enfoncée
window.addEventListener('keypress', (e) => {
  displayCharacter(String.fromCharCode(e.keyCode));
});
const textToType = document.querySelector('#text-to-type');
const userInput = document.querySelector('#user-input');
let currentIndex = 0;

// affiche le texte à dactylographier dans le conteneur
textToType.textContent = "Ceci est un texte à dactylographier. Essayez de taper les caractères correspondants. Bonne chance !";

// écoute les événements de touche tapée dans l'input
userInput.addEventListener('keydown', function(e) {
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
// Événement pour effacer le caractère affiché si la touche de suppression est enfoncée
window.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      // supprime le dernier caractère affiché
      display.textContent = display.textContent.slice(0, -1);
    }
  });
  
  // Événement pour afficher le caractère correspondant à la touche de clavier lorsqu'elle est enfoncée
  window.addEventListener('keydown', (e) => {
    const char = String.fromCharCode(e.keyCode);
    if (textToType.textContent[currentIndex] === char) {
      // Si la lettre tapée correspond à la lettre attendue, on affiche le caractère
      displayCharacter(char);
      currentIndex++;
    } else {
      // Si la lettre tapée ne correspond pas à la lettre attendue, on met en évidence la lettre incorrecte
      const incorrectChar = document.createElement('span');
      incorrectChar.classList.add('incorrect');
      incorrectChar.textContent = char;
      textToType.replaceChild(incorrectChar, textToType.childNodes[currentIndex]);
    }
  });
  