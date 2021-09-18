import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

export const AboutUs: FunctionComponent = () => {
  const history = useHistory();
  return (
    <>
      <h1>Information Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
        pariatur voluptate aut corrupti. Reprehenderit quis porro maiores cum
        minima dolorem.
      </p>
      <button onClick={() => history.push("/")} className="btn">
        Back to Projects
      </button>
    </>
  );
};
