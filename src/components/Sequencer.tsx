import React, { ReactElement } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../store";

import kitSlice from "../store/kitSlice";
import sampleSlice from "../store/sampleSlice";
import sequencerSlice from "../store/sequencerSlice";

import Component from "../components/Component";
import Columns from "../layout/Columns";
import Switch from "../components/Switch";
import Flex from "../layout/Flex";

import { useDispatch } from "react-redux";

type Props = {
  className?: string;
};

type Styles = {
  static: string;
  dynamic: string;
};

const styles = {} as Styles;

styles.static = "p-2 md:p-4 bg-neutral-100 border border-neutral-400 rounded";

export default function Sequencer({ className = "" }: Props) {
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

  styles.dynamic = className;
  return (
    <Component id="Sequencer">
      <div className={`${styles.static} ${styles.dynamic}`}>
        <Flex className="h-max justify-center">
          <span className="text-xs font-bold">Sequencer</span>
        </Flex>
        <Flex className="h-max justify-between py-1 md:py-2">
          <span className="text-xs text-neutral-600">{sample?.state?.asset?.type || "Select a Drum"}</span>
          <span className="text-xs text-neutral-600">{kit?.state?.model || "Select a Kit"}</span>
        </Flex>
        <Columns className="gap-1 md:gap-x-2 h-max">
          {sequencer.state.sequences.map((row: [], i: number) => (
            <Switch key={i} id={i} beat={i + 1} className="col-span-2 md:col-span-1" />
          ))}
        </Columns>
      </div>
    </Component>
  );
}
