import React, { ReactElement } from "react";

import sampleSlice from "../store/sampleSlice";
import sequencerSlice from "../store/sequencerSlice";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../store";

import Component from "../components/Component";
import Flex from "../layout/Flex";

type Props = {
  id: number;
  char: string;
  audio: any;
  type: string;
  className?: string;
};

type Styles = {
  static: string;
  dynamic: string;
};

const styles = {} as Styles;

styles.static =
  "h-full bg-neutral-200 hover:bg-neutral-100 active:bg-neutral-200 border border-neutral-400 active:border-neutral-400 active:border-violet-400 focus:border-violet-400 rounded active:shadow-neutral-400 text-neutral-600 active:shadow-inner focus:outline-0 text-xs";

export default function Switch({ id, char, audio, type, className = "" }: Props) {
  const dispatch = useDispatch();

  const sample = {
    state: useSelector((state: RootState) => state.sample),
    actions: sampleSlice.actions,
  };

  const sequencer = {
    state: useSelector((state: RootState) => state.sequencer),
    actions: sequencerSlice.actions,
  };

  styles.dynamic = className;

  return (
    <Component id="Pad">
      <button
        className={`${styles.static} ${styles.dynamic}`}
        onMouseDown={() => {
          dispatch(sample.actions.set({ id, char, audio, type }));
          audio.currentTime = 0;
          audio.play();
        }}
        onFocus={() => {
          dispatch(sample.actions.set({ id, char, audio, type }));
        }}
      >
        <Flex className="flex-col justify-center md:justify-between p-2">
          <span className="self-center md:self-start text-inherit">{type}</span>
          <span className="hidden md:block self-end text-inherit">{char}</span>
        </Flex>
      </button>
    </Component>
  );
}
