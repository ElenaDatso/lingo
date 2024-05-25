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
      original_text: "I'm fine thank you, and you?",
      translated_text: 'У мене все добре, дякую, а у тебе?',
      audio_url: 'audio/im_fine_thank_you_and_you.mp3',
    },
    {
      person: 'Person1',
      original_text: 'Hello, how are you?',
      translated_text: 'Привіт, як справи?',
      audio_url: 'audio/hello_how_are_you.mp3',
    },
    {
      person: 'Person2',
      original_text: "I'm fine thank you, and you?",
      translated_text: 'У мене все добре, дякую, а у тебе?',
      audio_url: 'audio/im_fine_thank_you_and_you.mp3',
    },
  ],
};

const dialogRoot = document.getElementById('dialog-wrap');
const progressBar = document.getElementById('progressBar');
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
      divWrap.innerHTML = `<img alt="user icon" width="48" height="48" src=${'https://img.icons8.com/fluency-systems-filled/48/user.png'} /><div>${`${speaker}: ${message}`}</div>`;
      progressBar.style.width = `${progress += progressChanks}%`;
      dialogRoot.appendChild(divWrap);
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, 2000);
}

printDialogueWithDelay(response.dialogue);
