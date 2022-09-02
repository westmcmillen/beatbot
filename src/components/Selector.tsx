import React, { ReactElement, useState } from "react";

import Component from "../components/Component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Error when typing IconDefinition?
type Props = {
  icon: any;
  state?: boolean;
  className?: string;
  onClick?: any;
};

type Styles = {
  static: string;
  dynamic: string;
  conditionals: {
    [key: string]: string;
  };
};

const styles = {} as Styles;

styles.static = "h-full active:shadow-inner focus:outline-0";

// Error when notating into typed object?

// styles.conditionals.active = "hover:bg-violet-200 active:bg-violet-300 border-violet-400 active:shadow-violet-400";

// styles.conditionals.inactive = "hover:bg-neutral-100 active:bg-neutral-200 border-neutral-400 active:shadow-neutral-400";

styles.conditionals = {
  active: "bg-neutral-800 active:shadow-black text-violet-400 active:text-neutral-400",
  inactive: "bg-neutral-800 active:shadow-neutral-900 text-neutral-400 active:text-violet-400",
};

export default function Selector({ icon, state, className = "", onClick }: Props) {
  styles.dynamic = className;
  return (
    <Component id="Selector">
      <button className={`${styles.static} ${styles.dynamic} ${state ? styles.conditionals.active : styles.conditionals.inactive}`} onClick={onClick}>
        <FontAwesomeIcon icon={icon} className="text-inherit" />
      </button>
    </Component>
  );
}
