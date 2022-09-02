import React, { ReactElement, useRef } from "react";

import tempoSlice from "../store/tempoSlice";
import sequencerSlice from "../store/sequencerSlice";
import swingSlice from "../store/swingSlice";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../store";

import Component from "../components/Component";
import Flex from "../layout/Flex";
import Selector from "../components/Selector";

import { faDeleteLeft, faMinus, faPlus, faShuffle } from "@fortawesome/free-solid-svg-icons";

// Error when typing IconDefinition?
type Props = {
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

export default function Display({ className = "" }: Props) {
  const tempo = {
    state: useSelector((state: RootState) => state.tempo),
    actions: tempoSlice.actions,
  };

  const sequencer = {
    state: useSelector((state: RootState) => state.sequencer),
    actions: sequencerSlice.actions,
  };

  const swing = {
    state: useSelector((state: RootState) => state.swing),
    actions: swingSlice.actions,
  };

  const dispatch = useDispatch();

  const inputRef: any = useRef(null);

  styles.dynamic = className;

  return (
    <Component id="Display">
      <Flex className="col-start-5 col-span-8 row-start-1 row-span-2">
        <Flex className="shrink-0 flex-col w-1/4">
          <Selector icon={faDeleteLeft} className="rounded-tl" onClick={() => dispatch(sequencer.actions.reset())} />
          <Selector icon={faShuffle} className="rounded-bl" state={swing.state.eighth} onClick={() => dispatch(swing.actions.set(!swing.state.eighth))} />
        </Flex>
        <Flex className="w-full flex-col justify-center items-center bg-neutral-900">
          <form
            className="contents"
            onSubmit={e => {
              e.preventDefault();
              if (+tempo.state.input > 0) {
                dispatch(tempo.actions.set(tempo.state.input));
              } else {
                dispatch(tempo.actions.input(tempo.state.bpm.toString()));
              }
              inputRef.current.blur();
            }}
          >
            <input
              type="text"
              ref={inputRef}
              value={tempo.state.input}
              className="w-full bg-transparent focus:border-none focus:outline-none text-xl md:text-[3rem] text-neutral-300 text-center leading-tight"
              onChange={e => {
                dispatch(tempo.actions.input(e.target.value));
              }}
            />
          </form>
          <span className="sm:hidden text-xs text-neutral-300 text-center">BPM</span>
          <span className="hidden sm:block text-xs text-neutral-300 text-center">Beats Per Minute</span>
        </Flex>
        <Flex className="shrink-0 flex-col w-1/4">
          <Selector icon={faPlus} className="rounded-tr" onClick={() => dispatch(tempo.actions.set(tempo.state.bpm + 1))} />
          <Selector icon={faMinus} className="rounded-br" onClick={() => dispatch(tempo.actions.set(tempo.state.bpm - 1))} />
        </Flex>
      </Flex>
    </Component>
  );
}
