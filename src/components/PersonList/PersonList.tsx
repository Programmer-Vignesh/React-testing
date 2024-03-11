import React from "react";

type PersonListProps = {
  name: {
    first: string;
    last: string;
  }[];
};
const role = "bold";
function PersonList(props: PersonListProps) {
  return (
    <div>
      Our trainers are{" "}
      {props.name.map((name) => {
        return (
          <span key={name.first}>
            <b role={role}>
              {name.first}
              {name.last}{" "}
            </b>
          </span>
        );
      })}
    </div>
  );
}

export default PersonList;
