import linndrum from "./linndrum";
import KR33 from "./KR33";
import CR80 from "./CR80";
import tr909 from "./tr-909";

export type Assets = [
  { id: number; char: "A"; audio: any; type: string },
  { id: number; char: "S"; audio: any; type: string },
  { id: number; char: "D"; audio: any; type: string },
  { id: number; char: "F"; audio: any; type: string },
  { id: number; char: "G"; audio: any; type: string },
  { id: number; char: "H"; audio: any; type: string },
  { id: number; char: "J"; audio: any; type: string },
  { id: number; char: "K"; audio: any; type: string },
  { id: number; char: "L"; audio: any; type: string },
  { id: number; char: "Z"; audio: any; type: string },
  { id: number; char: "X"; audio: any; type: string },
  { id: number; char: "C"; audio: any; type: string },
  { id: number; char: "V"; audio: any; type: string },
  { id: number; char: "B"; audio: any; type: string },
  { id: number; char: "N"; audio: any; type: string },
  { id: number; char: "M"; audio: any; type: string },
];

type Sample = {
  model: string;
  assets: Assets;
};

type Samples = {
  [key: string]: Sample;
};

const samples: Samples = {
  linndrum: { model: "Linndrum", assets: linndrum },
  KR33: { model: "Roland KR33", assets: KR33 },
  CR80: { model: "Roland CR80", assets: CR80 },
  tr909: { model: "Roland TR-909", assets: tr909 },
};

export default samples;
