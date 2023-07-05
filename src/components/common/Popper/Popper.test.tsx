import React from "react";
import Popper from "./Popper";
import { render } from "@testing-library/react";

describe("Popper", () => {
  test("renders Popper component", () => {
    render(
      <Popper positionX="center" positionY="bottom" children="Testing"></Popper>
    );
  });
});
