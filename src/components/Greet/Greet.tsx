import React from "react";

type GreetProps = {
  name: string;
  sessionCount: number;
  isLogged: boolean;
};

function Greet(props: GreetProps) {
  return (
    <h3>
      {props.isLogged
        ? `Welcome ${props.name} !... You have ${props.sessionCount}session to complete`
        : `Welcome Guest`}
    </h3>
  );
}

export default Greet;
