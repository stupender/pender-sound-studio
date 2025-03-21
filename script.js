// DOM Bindings 
let aboutButton = document.querySelector(".about");
let contactButton = document.querySelector(".contact");
let teachingButton = document.querySelector(".teaching");
let personalButton = document.querySelector(".personal");
let collaborationButton = document.querySelector(".collaboration");
let eventsButton = document.querySelector(".events");
let musiclessonsButton = document.querySelector(".music-lessons");
let musiclessons2Button = document.querySelector(".music-lessons-2");
let soundsessionsButton = document.querySelector(".sound-sessions");
let soundsessions2Button = document.querySelector(".sound-sessions-2");


// let soundsessionsButton = document.querySelector(".sound-sessions");

let aboutCard = document.querySelector(".about-container");
let contactCard = document.querySelector(".contact-container");
let offersCard = document.querySelector(".offers-container");
let teachingCard = document.querySelector(".teaching-container")
let personalCard = document.querySelector(".personal-container");
let collaborationCard = document.querySelector(".collaboration-container");
let eventsCard = document.querySelector(".events-container");
let musiclessonsCard = document.querySelector(".music-lessons-container");
let soundsessionsCard = document.querySelector(".sound-sessions-container");

let testimonialScroll = document.querySelector(".testimonials");
let scrollingItems = document.querySelector(".horizontal-scrolling-items");

// Event Listeners
aboutButton.addEventListener("click", displayAbout);
contactButton.addEventListener("click", displayContact);
teachingButton.addEventListener("click", displayTeaching);
collaborationButton.addEventListener("click", displayCollaboration);
personalButton.addEventListener("click", displayPersonal);
eventsButton.addEventListener("click", displayEvents);
// musiclessonsButton.addEventListener("click", displayMusicLessons);
// musiclessons2Button.addEventListener("click", displayMusicLessons);
// soundsessionsButton.addEventListener("click", displaySoundSessions);
// soundsessions2Button.addEventListener("click", displaySoundSessions);


// soundsessionsButton.addEventListener("click", displaySoundSessions);

// Functions
function displayAbout() {
    aboutCard.classList.toggle("show");
    aboutButton.classList.toggle("showing");
}

function displayTeaching() {
  if (teachingCard.classList.contains('show')) {
    teachingCard.classList.remove("show");
    soundsessionsCard.classList.remove("show");
    testimonialScroll.classList.remove("show");
    scrollingItems.classList.remove("show");
    // offersCard.classList.remove("show");
    // musiclessonsCard.classList.toggle("show");
    teachingButton.classList.remove("showing");
  } else {
    teachingCard.classList.add("show");
    soundsessionsCard.classList.add("show");
    testimonialScroll.classList.add("show");
    scrollingItems.classList.add("show");
    offersCard.classList.remove("show");
    // musiclessonsCard.classList.toggle("show");
    teachingButton.classList.add("showing");
  }
  if (musiclessonsButton.classList.contains('showing')) {
      musiclessonsButton.classList.remove('showing');
  }
  if (soundsessionsButton.classList.contains('showing')) {
      soundsessionsButton.classList.remove("showing");
  }

  if (musiclessonsCard.classList.contains('show')) {
      musiclessonsCard.classList.remove('show');
      // musiclessonsButton.classList.remove('showing');
      teachingButton.classList.add("showing");
      // teachingCard.classList.remove("show");
  }
  if (soundsessionsCard.classList.contains('show')) {
    soundsessionsCard.classList.remove('show');
    // musiclessonsButton.classList.remove('showing');
    teachingButton.classList.add("showing");
    // teachingCard.classList.remove("show");
}

}

function displayMusicLessons() {
  if (teachingCard.classList.contains("show")) {
    teachingCard.classList.remove("show");
    musiclessonsCard.classList.add("show");
    musiclessonsButton.classList.add("showing");
    offersCard.classList.add("show");
  } else if (musiclessonsCard.classList.contains("show")) {
    teachingCard.classList.add("show");
    musiclessonsCard.classList.remove("show");
    musiclessonsButton.classList.remove("showing");
    offersCard.classList.remove("show");
  } else if (soundsessionsCard.classList.contains('show')) {
    soundsessionsCard.classList.remove("show");
    soundsessionsButton.classList.remove("showing");
    musiclessonsCard.classList.add("show");
    musiclessonsButton.classList.add("showing");
  }

  // musiclessonsCard.classList.toggle("show");
  // musiclessonsButton.classList.toggle("showing");
  // offersCard.classList.toggle("show");

  // if (soundsessionsCard.classList.contains('show')) {
  //   soundsessionsCard.classList.remove("show");
  //   soundsessionsButton.classList.remove("showing");
  // }
}

function displaySoundSessions() {
  if (teachingCard.classList.contains("show")) {
    teachingCard.classList.remove("show");
    soundsessionsCard.classList.add("show");
    soundsessionsButton.classList.add("showing");
    offersCard.classList.add("show");
   } else if (soundsessionsCard.classList.contains("show")) {
    teachingCard.classList.add("show");
    soundsessionsCard.classList.remove("show");
    soundsessionsButton.classList.remove("showing");
    offersCard.classList.remove("show");
   } else if (musiclessonsCard.classList.contains('show')) {
    musiclessonsCard.classList.remove("show");
    musiclessonsButton.classList.remove("showing");
    soundsessionsCard.classList.add("show");
    soundsessionsButton.classList.add("showing");

  }
}

function displayEvents() {
  eventsCard.classList.toggle("show");
  eventsButton.classList.toggle("showing");
}


function displayContact() {
    contactCard.classList.toggle("show");
    contactButton.classList.toggle("showing");
}

// function displayOffers() {
//   offersCard.classList.toggle("show");
//   teachingCard.classList.toggle("show");
//   testimonialScroll.classList.toggle("show");
//   scrollingItems.classList.toggle("show");

//   teachingButton.classList.toggle("showing");
// }

function displayCollaboration() {
    collaborationCard.classList.toggle("show");
    collaborationButton.classList.toggle("showing");
}

function displayPersonal() {
    personalCard.classList.toggle("show");
    personalButton.classList.toggle("showing");
}

displayTeaching();
displayAbout();

// Generative Music Player

// Sampler Instrument

let SAMPLE_LIBRARY = {
    'Guitar': [
      { note: 'B',  octave: 2, file: 'Samples/Guitar/B2.mp3' },
      { note: 'D',  octave: 3, file: 'Samples/Guitar/D3.mp3' },
      { note: 'F#',  octave: 3, file: 'Samples/Guitar/F#3.mp3' },
      { note: 'G',  octave: 3, file: 'Samples/Guitar/G3.mp3' },
      { note: 'A',  octave: 3, file: 'Samples/Guitar/A3.mp3' },
      { note: 'B',  octave: 3, file: 'Samples/Guitar/B3.mp3' },
      { note: 'D',  octave: 4, file: 'Samples/Guitar/D4.mp3' }
    ],
    'Guitar Sustain': [
      { note: 'A',  octave: 4, file: 'Samples/Guitar Sustain/A4.mp3' },
      { note: 'C#',  octave: 5, file: 'Samples/Guitar Sustain/C#5.mp3' },
      { note: 'E',  octave: 5, file: 'Samples/Guitar Sustain/E5.mp3' },
      { note: 'G#',  octave: 5, file: 'Samples/Guitar Sustain/G#5.mp3' },
      { note: 'A',  octave: 5, file: 'Samples/Guitar Sustain/A5.mp3' }
    ],
    'Eno & Fripp': [
      { note: 'F#',  octave: 2, file: 'Samples/Eno & Fripp/F#2.mp3' },
      { note: 'C#',  octave: 3, file: 'Samples/Eno & Fripp/C#3.mp3' },
    ],
};

const OCTAVE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

let audioContext = new AudioContext();

function fetchSample(path) {
  return fetch(encodeURIComponent(path))
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer));
}

function noteValue(note, octave) {
  return octave * 12 + OCTAVE.indexOf(note);
}

function getNoteDistance(note1, octave1, note2, octave2) {
  return noteValue(note1, octave1) - noteValue(note2, octave2);
}

function getNearestSample(sampleBank, note, octave) {
  let sortedBank = sampleBank.slice().sort((sampleA, sampleB) => {
    let distanceToA =
      Math.abs(getNoteDistance(note, octave, sampleA.note, sampleA.octave));
    let distanceToB =
      Math.abs(getNoteDistance(note, octave, sampleB.note, sampleB.octave));
    return distanceToA - distanceToB;
  });
  return sortedBank[0];
}

function flatToSharp(note) {
  switch (note) {
    case 'Bb': return 'A#';
    case 'Db': return 'C#';
    case 'Eb': return 'D#';
    case 'Gb': return 'F#';
    case 'Ab': return 'G#';
    default: return note;
  }
}

function getSample(instrument, noteAndOctave) {
  let [, requestedNote, requestedOctave] = /^(\w[b\#]?)(\d)$/.exec(noteAndOctave);
  requestedOctave = parseInt(requestedOctave, 10);
  requestedNote = flatToSharp(requestedNote);
  let sampleBank = SAMPLE_LIBRARY[instrument];
  let sample = getNearestSample(sampleBank, requestedNote, requestedOctave);
  let distance =
    getNoteDistance(requestedNote, requestedOctave, sample.note, sample.octave);
  return fetchSample(sample.file).then(audioBuffer => ({
    audioBuffer: audioBuffer,
    distance: distance
  }));
}

function playSample(instrument, note, delaySeconds = 0) {
    getSample(instrument, note).then(({audioBuffer, distance}) => {
      let playbackRate = Math.pow(2, distance / 12);
      let bufferSource = audioContext.createBufferSource();
      bufferSource.buffer = audioBuffer;
      bufferSource.playbackRate.value = playbackRate;
      bufferSource.connect(audioContext.destination);
      bufferSource.start(audioContext.currentTime + delaySeconds);
    });
  }

function startLoop(instrument, note, loopLengthSeconds, delaySeconds) {
    playSample(instrument, note, delaySeconds);
    setInterval(
      () => playSample(instrument, note, delaySeconds),
      loopLengthSeconds * 1000
    );
  }

let playedOnce = false;
// EVENT LISTENER
  let button = document.querySelector('button.play');
  button.addEventListener('click', function() {
    if(playedOnce == true) {
      return;
    } else {
              // Guitar Flute Sounds
              startLoop('Guitar Sustain', 'F4', 11.1, 0.0);
              startLoop('Guitar Sustain', 'Ab4', 10, 3.1);
              startLoop('Guitar Sustain', 'C5', 12.1, 5.6);
              startLoop('Guitar Sustain', 'Db5', 15.5, 9.6);
              startLoop('Guitar Sustain', 'Eb5', 17.3, 10.2);
              startLoop('Guitar Sustain', 'F5', 18.6, 11.1);
              startLoop('Guitar Sustain', 'Ab5', 23.1, 14.1);  
        
              // Eno & Fripp Low Padded Chords
              startLoop('Eno & Fripp', 'C#3', 30, 15.1);  
              startLoop('Eno & Fripp', 'F#2', 30, 25.1);

              // startLoop('Field Recordings', 'C4', 60, 0.0);


              playedOnce = true;
    }
  });

// PLAY/PAUSE
audioContext.suspend().then(function() {
  button.textContent = 'Play';
});

button.onclick = function() {
  if(audioContext.state === 'running') {
    audioContext.suspend().then(function() {
      button.textContent = 'Play';
    });
  } else if(audioContext.state === 'suspended') {
    audioContext.resume().then(function() {
      button.textContent = 'Pause';
    });
  }
}

// Could we make a record button and personal record function on this
// as an app for people to make their own version....

// Perhaps combine the user input sound with a qualitative/quantitative 
// musical elements exploration .... an app for ear training, theory
// etc through this lens ... 
