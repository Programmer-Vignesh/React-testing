import React from "react";

type StatuProps = {
  status?: "loading" | "success" | "failed";
};

function Status(props: StatuProps) {
  let display;
  switch (props.status) {
    case "loading":
      display = "loading in process";
      break;
    case "success":
      display = "successfully loaded";
      break;
    case "failed":
      display = "loading is failed";
      break;
    default:
      display = "nothing is happening";
  }
  return <>status - {display}</>;
}

export default Status;
