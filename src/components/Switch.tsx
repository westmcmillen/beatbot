import React, { ReactElement, useRef } from "react";

import kitSlice from "../store/kitSlice";
import sampleSlice from "../store/sampleSlice";
import sequencerSlice from "../store/sequencerSlice";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../store";

import Component from "../components/Component";

type Props = {
  id: number;
  beat: number;
  className?: string;
};

type Styles = {
  static: string;
  dynamic: string;
  conditionals: {
    [key: string]: string;
  };
};

const styles = {} as Styles;

styles.static = "h-8 md:h-12 lg:h-16 border rounded active:shadow-inner focus:outline-0";

// Error when notating into typed object?

// styles.conditionals.active = "hover:bg-violet-200 active:bg-violet-300 border-violet-400 active:shadow-violet-400";

// styles.conditionals.inactive = "hover:bg-neutral-100 active:bg-neutral-200 border-neutral-400 active:shadow-neutral-400";

styles.conditionals = {
  active: "bg-violet-200 hover:bg-violet-100 active:bg-neutral-200 border-violet-400 active:border-neutral-400 active:shadow-neutral-400 text-violet-600 active:text-neutral-600",
  inactive: "bg-neutral-200 hover:bg-neutral-100 active:bg-violet-200 border-neutral-400 active:border-neutral-400 active:shadow-violet-400 text-neutral-600 active:text-violet-600",
};

export default function Switch({ id, beat, className = "" }: Props) {
  const kit = {
    state: useSelector((state: RootState) => state.kit),
    actions: kitSlice.actions,
  };

  const sample = {
    state: useSelector((state: RootState) => state.sample),
    actions: sampleSlice.actions,
  };

  const sequencer = {
    state: useSelector((state: RootState) => state.sequencer),
    actions: sequencerSlice.actions,
  };

  const dispatch = useDispatch();

  const state = sequencer.state.sequences[sample?.state?.asset?.id]?.[id];

  styles.dynamic = className;

  return (
    <Component id="Switch">
      <button
        className={`${styles.static} ${styles.dynamic} ${state ? styles.conditionals.active : styles.conditionals.inactive}`}
        onMouseDown={async () => {
          if (!state) {
            sample.state.asset.audio.currentTime = 0;
            await sample.state.asset.audio.play();
          }
          dispatch(sequencer.actions.set({ row: sample.state.asset.id, column: id, value: !state }));
        }}
      >
        <span className="text-inherit">{beat}</span>
      </button>
    </Component>
  );
}
