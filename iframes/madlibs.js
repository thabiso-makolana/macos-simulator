function parseStory(rawStory) {
  const regex = /(\w+)\[([nva])\]|(\w+)|([.,!?;])/g;
  const matches = [...rawStory.matchAll(regex)];
  
  return matches.map(match => {
    if (match[1] !== undefined) {
      return { word: match[1], pos: { n: 'noun', v: 'verb', a: 'adjective' }[match[2]] };
    } else if (match[3] !== undefined) {
      return { word: match[3] };
    } else {
      return { word: match[4] };
    }
  });
}

function displayStory(story) {
  const madLibsEdit = document.querySelector('.madLibsEdit');
  const madLibsPreview = document.querySelector('.madLibsPreview');

  story.forEach((part, index) => {
    if (part.pos) {
      const input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('maxlength', '20');
      input.setAttribute('data-index', index);
      input.setAttribute('placeholder', part.pos);
      input.addEventListener('input', updatePreview);
      madLibsEdit.appendChild(input);
    } else {
      madLibsEdit.appendChild(document.createTextNode(part.word + ' '));
    }

    madLibsPreview.appendChild(document.createTextNode(part.word + ' '));
  });
}

function updatePreview() {
  const inputs = document.querySelectorAll('.madLibsEdit input');
  const madLibsPreview = document.querySelector('.madLibsPreview');

  inputs.forEach(input => {
    const index = input.getAttribute('data-index');
    madLibsPreview.childNodes[index].textContent = input.value ? input.value + ' ' : '______ ';
  });
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const activeElement = document.activeElement;
    if (activeElement.tagName === 'INPUT') {
      const inputs = document.querySelectorAll('.madLibsEdit input');
      const index = Array.from(inputs).indexOf(activeElement);
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  }
});

function saveProgress() {
  const inputs = document.querySelectorAll('.madLibsEdit input');
  const progress = {};
  
  inputs.forEach(input => {
    const index = input.getAttribute('data-index');
    progress[index] = input.value;
  });
  
  localStorage.setItem('madLibsProgress', JSON.stringify(progress));
}

function loadProgress() {
  const progress = JSON.parse(localStorage.getItem('madLibsProgress'));
  if (progress) {
    const inputs = document.querySelectorAll('.madLibsEdit input');
    inputs.forEach(input => {
      const index = input.getAttribute('data-index');
      if (progress[index]) {
        input.value = progress[index];
        input.dispatchEvent(new Event('input'));
      }
    });
  }
}

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        "Enter a": "Enter a",
        "noun": "noun",
        "verb": "verb",
        "adjective": "adjective"
      }
    },
    es: {
      translation: {
        "Enter a": "Ingrese un",
        "noun": "sustantivo",
        "verb": "verbo",
        "adjective": "adjetivo"
      }
    }
  }
}, function(err, t) {
  updateContent();
});

function updateContent() {
  const inputs = document.querySelectorAll('.madLibsEdit input');
  inputs.forEach(input => {
    const placeholder = input.getAttribute('placeholder');
    input.setAttribute('placeholder', i18next.t(placeholder));
  });
}

window.addEventListener('beforeunload', saveProgress);
window.addEventListener('load', loadProgress);

getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    displayStory(processedStory);
  });
