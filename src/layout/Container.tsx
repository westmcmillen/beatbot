import React, { ReactElement } from "react";

import Component from "../components/Component";

type Props = {
  className?: string;
  children: ReactElement | ReactElement[];
};

type Styles = {
  static: string;
  dynamic: string;
};

const styles = {} as Styles;

styles.static = "sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg h-full sm:mx-auto";

export default function Container({ className = "", children }: Props) {
  styles.dynamic = className;
  return (
    <Component id="Container">
      <div className={`${styles.static} ${styles.dynamic}`}>{children}</div>
    </Component>
  );
}
