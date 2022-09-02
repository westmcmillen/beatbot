import React, { ReactElement, useEffect, useRef } from "react";

import kitSlice from "../store/kitSlice";
import audioSlice from "../store/audioSlice";
import sequencerSlice from "../store/sequencerSlice";
import runSlice from "../store/runSlice";
import swingSlice from "../store/swingSlice";
import tempoSlice from "../store/tempoSlice";
import metronomeSlice from "../store/metronomeSlice";
import settingsSlice from "../store/settingsSlice";

import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useDispatch } from "react-redux";

import Component from "./Component";
import Columns from "../layout/Columns";
import Flex from "../layout/Flex";
import Stop from "./Stop";
import Play from "./Play";
import Display from "./Display";
import Button from "./Button";

import { faBell, faBellSlash, faCog, faPlay, faRightToBracket, faStop, faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

type Props = {
  className?: string;
};

type Styles = {
  static: string;
  dynamic: string;
};

const styles = {} as Styles;

styles.static = "h-max bg-neutral-200 p-2 md:p-4 bg-neutral-300 border border-neutral-400 rounded";

export default function Controller({ className = "" }: Props) {
  const kit = {
    state: useSelector((state: RootState) => state.kit),
    actions: kitSlice.actions,
  };

  const sequencer = {
    state: useSelector((state: RootState) => state.sequencer),
    actions: sequencerSlice.actions,
  };

  const run = {
    state: useSelector((state: RootState) => state.run),
    actions: runSlice.actions,
  };

  const swing = {
    state: useSelector((state: RootState) => state.swing),
    actions: swingSlice.actions,
  };

  const audio = {
    state: useSelector((state: RootState) => state.audio),
    actions: audioSlice.actions,
  };

  const tempo = {
    state: useSelector((state: RootState) => state.tempo),
    actions: tempoSlice.actions,
  };

  const metronome = {
    state: useSelector((state: RootState) => state.metronome),
    actions: metronomeSlice.actions,
  };

  const settings = {
    state: useSelector((state: RootState) => state.settings),
    actions: settingsSlice.actions,
  };

  const dispatch = useDispatch();

  const kitRef = useRef(kit.state.assets);

  useEffect(() => {
    kitRef.current = kit.state.assets;
  }, [kit.state.assets]);

  const metronomeRef = useRef(metronome.state.mute);

  useEffect(() => {
    metronomeRef.current = metronome.state.mute;
  }, [metronome.state.mute]);

  const playRef = useRef(run.state.play);

  useEffect(() => {
    playRef.current = run.state.play;
    if (run.state.play === false) return;
    play();
  }, [run.state.play]);

  const tempoRef = useRef(tempo.state.bpm);

  useEffect(() => {
    tempoRef.current = tempo.state.bpm;
  }, [tempo.state.bpm]);

  const swingRef = useRef(swing.state.eighth);

  useEffect(() => {
    swingRef.current = swing.state.eighth;
  }, [swing.state.eighth]);

  const sequencesRef: any = useRef(sequencer.state.sequences);

  useEffect(() => {
    sequencesRef.current = sequencer.state.sequences;
  }, [sequencer.state.sequences]);

  const play = async () => {
    do {
      for (let i = 0; i < sequencesRef.current.length; i++) {
        for (let j = 0; j < sequencesRef.current.length; j++) {
          if (playRef.current === false) return;
          if (metronomeRef.current === false) {
            if (i === 0 || i === 4 || i === 8 || i === 12 || i === 16) {
              metronome.state.audio.currentTime = 0;
              metronome.state.audio.play();
            }
          }
          if (sequencesRef.current[j][i]) {
            if (swingRef.current) {
              if (i === 0 || i === 4 || i === 8 || i === 12) {
                kitRef.current[j].audio.currentTime = 0;
                kitRef.current[j].audio.play();
              } else {
                if (i % 2 === 0) {
                  setTimeout(() => {
                    kitRef.current[j].audio.currentTime = 0;
                    kitRef.current[j].audio.play();
                  }, 60_000 / tempoRef.current / 6);
                } else {
                  setTimeout(() => {
                    kitRef.current[j].audio.currentTime = 0;
                    kitRef.current[j].audio.play();
                  }, 60_000 / tempoRef.current / 3);
                }
              }
            } else {
              kitRef.current[j].audio.currentTime = 0;
              kitRef.current[j].audio.play();
            }
          }
        }
        await new Promise(resolve => setTimeout(resolve, 60_000 / tempoRef.current / 4));
      }
    } while (playRef.current);
    return;
  };

  useEffect(() => {
    switch (audio.state.mute) {
      case true:
        kitRef.current.forEach((asset: any) => {
          asset.audio.muted = true;
        });
        break;
      default:
        kitRef.current.forEach((asset: any) => {
          asset.audio.muted = false;
        });
    }
  }, [audio.state.mute]);

  useEffect(() => {
    switch (metronome.state.mute) {
      case true:
        metronome.state.audio.muted = true;
        break;
      default:
        metronome.state.audio.muted = false;
    }
  }, [metronome.state.mute]);

  styles.dynamic = className;

  return (
    <Component id="Controller">
      <div className={`${styles.static} ${styles.dynamic}`}>
        <Columns className="gap-1 md:gap-2">
          <Stop icon={faStop} className="col-start-1 col-span-4 self-start" />
          <Play icon={faPlay} className="col-start-13 col-span-4 self-start" />
          <Display />
          <Button
            icon={audio.state.mute ? faVolumeMute : faVolumeHigh}
            state={audio.state.mute}
            className="col-start-1 col-span-2 self-end"
            onClick={() => {
              dispatch(audio.actions.toggle());
              dispatch(metronome.actions.set(true));
            }}
          />
          <Button
            icon={metronome.state.mute ? faBellSlash : faBell}
            state={metronome.state.mute}
            className="col-start-3 col-span-2 self-end"
            onClick={() => {
              if (audio.state.mute === false) {
                dispatch(metronome.actions.toggle());
              }
            }}
          />
          <Button
            icon={faCog}
            state={settings.state.menu}
            className="col-start-13 col-span-2 self-end"
            onClick={() => {
              dispatch(settings.actions.toggle());
            }}
          />
          <Button icon={faRightToBracket} state={null} className="col-start-15 col-span-2 self-end" onClick={() => {}} />
        </Columns>
      </div>
    </Component>
  );
}
