import { Assets } from ".";

const linndrum: Assets = [
  { id: 0, char: "A", audio: new Audio("/wav/linndrum/kick.WAV"), type: "Bass Drum" },
  { id: 1, char: "S", audio: new Audio("/wav/linndrum/kickme.WAV"), type: "Bass Drum" },
  { id: 2, char: "D", audio: new Audio("/wav/linndrum/sdl.WAV"), type: "Snare Drum" },
  { id: 3, char: "F", audio: new Audio("/wav/linndrum/sdh.WAV"), type: "Snare Drum" },
  { id: 4, char: "G", audio: new Audio("/wav/linndrum/tomll.WAV"), type: "Low Tom" },
  { id: 5, char: "H", audio: new Audio("/wav/linndrum/toml.WAV"), type: "Low Tom" },
  { id: 6, char: "J", audio: new Audio("/wav/linndrum/tom.WAV"), type: "Mid Tom" },
  { id: 7, char: "K", audio: new Audio("/wav/linndrum/tomh.WAV"), type: "Hi Tom" },
  { id: 8, char: "L", audio: new Audio("/wav/linndrum/tomhh.WAV"), type: "Hi Tom" },
  { id: 9, char: "Z", audio: new Audio("/wav/linndrum/cowb.WAV"), type: "Cow Bell" },
  { id: 10, char: "X", audio: new Audio("/wav/linndrum/tamb.WAV"), type: "Tamb" },
  { id: 11, char: "C", audio: new Audio("/wav/linndrum/clap.WAV"), type: "Clap" },
  { id: 12, char: "V", audio: new Audio("/wav/linndrum/chhs.WAV"), type: "Closed Hat" },
  { id: 13, char: "B", audio: new Audio("/wav/linndrum/cabasa.WAV"), type: "Cabasa" },
  { id: 14, char: "N", audio: new Audio("/wav/linndrum/crash.WAV"), type: "Crash" },
  { id: 15, char: "M", audio: new Audio("/wav/linndrum/ride.WAV"), type: "Ride" },
];

export default linndrum;
