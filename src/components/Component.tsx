import React, { ReactElement } from "react";

type Props = {
  id: string;
  className?: string;
  children: ReactElement | ReactElement[];
};

type Styles = {
  static: string;
  dynamic: string;
};

const styles = {} as Styles;

styles.static = "contents";

export default function Component({ id, className = "", children }: Props) {
  styles.dynamic = className;
  return (
    <div id={id} className={`${styles.static} ${styles.dynamic}`}>
      {children}
    </div>
  );
}
