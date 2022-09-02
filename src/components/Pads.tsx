import React, { ReactElement, useEffect } from "react";

import kitSlice from "../store/kitSlice";
import sampleSlice from "../store/sampleSlice";
import settingsSlice from "../store/settingsSlice";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../store";

import Component from "../components/Component";
import Columns from "../layout/Columns";
import Pad from "../components/Pad";

type Props = {
  className?: string;
};

type Styles = {
  static: string;
  dynamic: string;
  conditional: string;
};

const styles = {} as Styles;

styles.static = "h-full p-1 bg-neutral-300 border border-neutral-400 rounded ease-in-out duration-300";

export default function Pads({ className = "" }: Props) {
  const kit = {
    state: useSelector((state: RootState) => state.kit),
    actions: kitSlice.actions,
  };

  const settings = {
    state: useSelector((state: RootState) => state.settings),
    actions: settingsSlice.actions,
  };

  const sample = {
    state: useSelector((state: RootState) => state.sample),
    actions: sampleSlice.actions,
  };

  styles.conditional = `${settings.state.menu ? "translate-y-full" : null}`;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sample.actions.set({ id: kit.state.assets[0].id, char: kit.state.assets[0].char, audio: kit.state.assets[0].audio, type: kit.state.assets[0].type }));
    // dispatch(sample.actions.reset());
  }, []);

  styles.dynamic = className;

  return (
    <Component id="Pads">
      <div className={`${styles.static} ${styles.dynamic} ${styles.conditional}`}>
        <Columns className="gap-1">
          {kit.state.assets.map((asset: any, i: number) => (
            <Pad key={i} id={asset.id} audio={asset.audio} char={asset.char} type={asset.type} className="col-span-4" />
          ))}
        </Columns>
      </div>
    </Component>
  );
}
