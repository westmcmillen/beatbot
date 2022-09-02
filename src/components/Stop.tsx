import React, { ReactElement } from "react";

import runSlice from "../store/runSlice";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../store";

import Component from "../components/Component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  icon: any;
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

styles.conditionals = {
  active: "bg-violet-200 hover:bg-violet-100 active:bg-neutral-200 border-violet-400 active:border-neutral-400 active:shadow-neutral-400 text-violet-600 active:text-neutral-600",
  inactive: "bg-neutral-200 hover:bg-neutral-100 active:bg-violet-200 border-neutral-400 active:border-neutral-400 active:shadow-violet-400 text-neutral-600 active:text-violet-600",
};

export default function Stop<forwardRef>({ icon, className = "" }: Props) {
  const run = {
    state: useSelector((state: RootState) => state.run),
    actions: runSlice.actions,
  };

  const dispatch = useDispatch();

  styles.dynamic = className;

  return (
    <Component id="Stop">
      <button
        className={`${styles.static} ${styles.dynamic} ${!run.state.play ? styles.conditionals.active : styles.conditionals.inactive}`}
        onClick={() => {
          dispatch(run.actions.set(false));
        }}
      >
        <FontAwesomeIcon icon={icon} className="text-inherit" />
      </button>
    </Component>
  );
}
