// permet d'afficher un paragraphe lorsqu'on clique sur un bouton
function toggleChapter() {
    const chapter = event.target.closest('.chapter');
    chapter.classList.toggle('open');
    const button = chapter.querySelector('.toggle-button');
    button.classList.toggle('open');
  }
  