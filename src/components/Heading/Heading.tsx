import React, { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
};

function Heading(props: HeadingProps) {
  return <div>{props.children}</div>;
}

export default Heading;
