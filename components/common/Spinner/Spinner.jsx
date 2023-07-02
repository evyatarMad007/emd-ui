import React from "react";
import { SpinnerContainerSmall, SpinnerContainerBig } from "./Spinner.styled";

const Spinner = ({ size = "big" }) => {
  if (size === "small") return <SpinnerContainerSmall />;

  if (size === "big") return <SpinnerContainerBig />;
};

export default Spinner;
