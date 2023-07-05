import React from "react";
import { SpinnerContainerSmall, SpinnerContainerBig } from "./Spinner.styled";

interface SpinnerProps {
  size?: "small" | "big";
}

const Spinner: React.FC<SpinnerProps> = ({ size = "big" }) => {
  if (size === "small") return <SpinnerContainerSmall />;

  if (size === "big") return <SpinnerContainerBig />;

  return null; // Add a default return statement if needed
};

export default Spinner;
