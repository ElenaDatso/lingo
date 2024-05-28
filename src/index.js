const response = {
  dialogue: [
    {
      person: 'Person1',
      original_text: 'Hello, how are you?',
      translated_text: 'Привіт, як справи?',
      audio_url: 'audio/hello_how_are_you.mp3',
    },
    {
      person: 'Person2',
      original_text: 'I am good, thank you. And you?',
      translated_text: 'Я добре, дякую. А ти?',
      audio_url: 'audio/i_am_good_thank_you.mp3',
    },
    {
      person: 'Person1',
      original_text: 'I am fine too. What are you doing?',
      translated_text: 'Я теж добре. Що ти робиш?',
      audio_url: 'audio/i_am_fine_too.mp3',
    },
    {
      person: 'Person2',
      original_text: 'I am reading a book. What about you?',
      translated_text: 'Я читаю книгу. А ти?',
      audio_url: 'audio/i_am_reading_a_book.mp3',
    },
    {
      person: 'Person1',
      original_text: 'I am working on a project.',
      translated_text: 'Я працюю над проектом.',
      audio_url: 'audio/i_am_working_on_a_project.mp3',
    },
    {
      person: 'Person2',
      original_text: 'That sounds interesting. What kind of project?',
      translated_text: 'Це звучить цікаво. Який проект?',
      audio_url: 'audio/that_sounds_interesting.mp3',
    },
    {
      person: 'Person1',
      original_text: 'It is a web development project.',
      translated_text: 'Це проект з веб-розробки.',
      audio_url: 'audio/it_is_a_web_development_project.mp3',
    },
    {
      person: 'Person2',
      original_text: 'Good luck with your project!',
      translated_text: 'Удачі з твоїм проектом!',
      audio_url: 'audio/good_luck_with_your_project.mp3',
    },
    {
      person: 'Person1',
      original_text: 'Thank you! Have a great day!',
      translated_text: 'Дякую! Гарного дня!',
      audio_url: 'audio/thank_you_have_a_great_day.mp3',
    },
    {
      person: 'Person2',
      original_text: 'You too! Bye!',
      translated_text: 'Тобі теж! Бувай!',
      audio_url: 'audio/you_too_bye.mp3',
    },
    {
      person: 'Person2',
      original_text: 'Good luck with your project!',
      translated_text: 'Удачі з твоїм проектом!',
      audio_url: 'audio/good_luck_with_your_project.mp3',
    },
    {
      person: 'Person1',
      original_text: 'Thank you! Have a great day!',
      translated_text: 'Дякую! Гарного дня!',
      audio_url: 'audio/thank_you_have_a_great_day.mp3',
    },
    {
      person: 'Person2',
      original_text: 'You too! Bye!',
      translated_text: 'Тобі теж! Бувай!',
      audio_url: 'audio/you_too_bye.mp3',
    },
  ],
};

const dialogRoot = document.getElementById('dialog-wrap');
const progressBar = document.getElementById('progressBar');
const hintButton = document.getElementById('hint-button');
const continueButton = document.getElementById('continue-button');
let showHint = false;

function printDialogueWithDelay(dialogue) {
  let index = 0;
  const progressChanks = 100 / dialogue.length;
  let progress = 0;

  const intervalId = setInterval(() => {
    if (index < dialogue.length) {
      const speaker = dialogue[index].person;
      const message = dialogue[index].original_text;
      const divWrap = document.createElement('div');
      divWrap.className = 'messageWrap column';
      divWrap.innerHTML = `<img class="user-icon" alt="user icon" width="48" height="48" src=${'https://img.icons8.com/fluency-systems-filled/48/user.png'} /><div id=line${index}>${`${speaker}: ${message}`}</div>`;
      progressBar.style.width = `${progress += progressChanks}%`;
      dialogRoot.appendChild(divWrap);
      dialogRoot.scrollTop = dialogRoot.scrollHeight;
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, 2000);
};

const hintButtonHandler = (event) => {
  const button = event.target.closest('button');
  showHint = !showHint;
  button.querySelector('span').textContent = showHint
    ? 'Сховати підказки'
    : 'Скористатися підказкою';
  const dialog = document.querySelectorAll('.messageWrap div');
  dialog.forEach((d) => {
    const reply = response.dialogue[d.getAttribute('id').match(/[0-9]/)[0]];
    showHint
      ? (d.textContent = reply['translated_text'])
      : (d.textContent = reply['original_text']);
  });
};

hintButton.addEventListener('click', (e) => hintButtonHandler(e));

printDialogueWithDelay(response.dialogue);
