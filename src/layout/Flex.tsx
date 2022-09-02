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

styles.static = "flex h-full";

export default function Flex({ className = "", children }: Props) {
  styles.dynamic = className;
  return (
    <Component id="Flex">
      <div className={`${styles.static} ${styles.dynamic}`}>{children}</div>
    </Component>
  );
}
