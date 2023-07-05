import React from "react";
import Label from "./Label";
import { render } from "@testing-library/react";

describe("Label", () => {
  test("renders Label component", () => {
    render(<Label title="title" children="children" />);
  });
});
