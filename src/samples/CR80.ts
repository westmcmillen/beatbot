import { Assets } from ".";

const CR80: Assets = [
  { id: 0, char: "A", audio: new Audio("/wav/CR80/CR80_BD.WAV"), type: "Bass Drum" },
  { id: 1, char: "S", audio: new Audio("/wav/CR80/CR80_BD.WAV"), type: "Bass Drum" },
  { id: 2, char: "D", audio: new Audio("/wav/CR80/CR80_Snare.WAV"), type: "Snare Drum" },
  { id: 3, char: "F", audio: new Audio("/wav/CR80/CR80_Snare.WAV"), type: "Snare Drum" },
  { id: 4, char: "G", audio: new Audio("/wav/CR80/CR80_Tom.WAV"), type: "Low Tom" },
  { id: 5, char: "H", audio: new Audio("/wav/CR80/CR80_Ahh.WAV"), type: "Ahh" },
  { id: 6, char: "J", audio: new Audio("/wav/CR80/CR80_Ha.WAV"), type: "Ha" },
  { id: 7, char: "K", audio: new Audio("/wav/CR80/CR80_Hey.WAV"), type: "Hey" },
  { id: 8, char: "L", audio: new Audio("/wav/CR80/CR80_Scratch1.WAV"), type: "Scratch" },
  { id: 9, char: "Z", audio: new Audio("/wav/CR80/CR80_Scratch2.WAV"), type: "Scratch" },
  { id: 10, char: "X", audio: new Audio("/wav/CR80/CR80_Uuh.WAV"), type: "Uuh" },
  { id: 11, char: "C", audio: new Audio("/wav/tr-909/HANDCLP1.WAV"), type: "Clap" },
  { id: 12, char: "V", audio: new Audio("/wav/CR80/CR80_Chh.WAV"), type: "Closed" },
  { id: 13, char: "B", audio: new Audio("/wav/CR80/CR80_Ohh.WAV"), type: "Open" },
  { id: 14, char: "N", audio: new Audio("/wav/CR80/CR80_Crash.WAV"), type: "Crash" },
  { id: 15, char: "M", audio: new Audio("/wav/CR80/CR80_Ride.WAV"), type: "Ride" },
];

export default CR80;
