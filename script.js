// DOM Bindings 
let aboutButton = document.querySelector(".about");
let contactButton = document.querySelector(".contact");
let teachingButton = document.querySelector(".teaching");
let personalButton = document.querySelector(".personal");
let collaborationButton = document.querySelector(".collaboration");

let aboutCard = document.querySelector(".about-container");
let contactCard = document.querySelector(".contact-container");
let teachingCard = document.querySelector(".teaching-container")
let personalCard = document.querySelector(".personal-container");
let collaborationCard = document.querySelector(".collaboration-container");

// Event Listeners
aboutButton.addEventListener("click", displayAbout);
contactButton.addEventListener("click", displayContact);
teachingButton.addEventListener("click", displayTeaching);
collaborationButton.addEventListener("click", displayCollaboration);
personalButton.addEventListener("click", displayPersonal);

// Functions
function displayAbout() {
    aboutCard.classList.toggle("show");
    aboutButton.classList.toggle("showing");
}

function displayTeaching() {
    teachingCard.classList.toggle("show");
    teachingButton.classList.toggle("showing");
}

function displayContact() {
    contactCard.classList.toggle("show");
    contactButton.classList.toggle("showing");
}

function displayCollaboration() {
    collaborationCard.classList.toggle("show");
    collaborationButton.classList.toggle("showing");
}

function displayPersonal() {
    personalCard.classList.toggle("show");
    personalButton.classList.toggle("showing");
}

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
  let button = document.querySelector('button');
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
