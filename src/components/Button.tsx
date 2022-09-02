import React, { ReactElement } from "react";

import Component from "../components/Component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Error when typing IconDefinition?
type Props = {
  icon: any;
  state: boolean | null;
  onClick?: any;
  className?: string;
};

type Styles = {
  static: string;
  dynamic: string;
  conditionals: {
    active: string;
    inactive: string;
  };
};

const styles = {} as Styles;

styles.static =
  "h-8 md:h-12 lg:h-16 bg-neutral-200 hover:bg-neutral-100 active:bg-neutral-200 border-neutral-400 active:border-neutral-400 border rounded active:shadow-inner active:shadow-neutral-400 focus:outline-0 text-neutral-600";

styles.conditionals = {
  active: "bg-violet-200 hover:bg-violet-100 active:bg-neutral-200 border-violet-400 active:border-neutral-400 active:shadow-neutral-400 text-violet-600 active:text-neutral-600",
  inactive: "bg-neutral-200 hover:bg-neutral-100 active:bg-violet-200 border-neutral-400 active:border-neutral-400 active:shadow-violet-400 text-neutral-600 active:text-violet-600",
};

export default function Button({ icon, state, className = "", onClick }: Props) {
  styles.dynamic = className;

  return (
    <Component id="Button">
      <button className={`${styles.static} ${styles.dynamic} ${state ? styles.conditionals.active : styles.conditionals.inactive}`} onClick={() => onClick()}>
        <FontAwesomeIcon icon={icon} className="text-inherit" />
      </button>
    </Component>
  );
}
