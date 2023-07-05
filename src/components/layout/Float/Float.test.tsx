import React from "react";
import Float from "./Float";
import { render } from "@testing-library/react";

describe("Float", () => {
  test("renders Float component", () => {
    render(
      <Float position="absolute" location={[10, 0, 0, 10]}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Float>
    );
  });
});
