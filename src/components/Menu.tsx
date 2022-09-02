import React, { ReactElement, useEffect } from "react";

import samples from "../samples";

import kitSlice from "../store/kitSlice";
import sampleSlice from "../store/sampleSlice";
import settingsSlice from "../store/settingsSlice";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../store";

import Component from "../components/Component";
import Columns from "../layout/Columns";
import Flex from "../layout/Flex";

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

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  styles.dynamic = className;

  return (
    <Component id="Kit">
      <div className={`${styles.static} ${styles.dynamic} ${styles.conditional}`}>
        <Columns className="gap-1 !h-max">
          {Object.entries(samples).map(entry => (
            <Component id="Pad" key={entry[1].model}>
              <button
                className={
                  "col-span-full md:col-span-8 h-12 md:h-16 lg:h-20 bg-neutral-200 hover:bg-neutral-100 active:bg-neutral-200 border border-neutral-400 active:border-neutral-400 active:border-violet-400 focus:border-violet-400 rounded active:shadow-neutral-400 text-neutral-600 active:shadow-inner focus:outline-0 text-xs"
                }
                onMouseDown={() => {
                  dispatch(kit.actions.set({ model: entry[1].model, assets: entry[1].assets }));
                  dispatch(settings.actions.set(false));
                }}
                onFocus={() => {
                  dispatch(kit.actions.set({ model: entry[1].model, assets: entry[1].assets }));
                  dispatch(settings.actions.set(false));
                }}
              >
                <Flex className="flex-col justify-center items-center p-2">
                  <span className="text-inherit">{entry[1].model}</span>
                </Flex>
              </button>
            </Component>
          ))}
        </Columns>
      </div>
    </Component>
  );
}
