import React from "react";
import Flex from "./Flex";
import { render } from "@testing-library/react";
describe("Flex", () => {
  test("renders Flex component", () => {
    render(
      <Flex flexDir="column" flexX="center" flexY="center">
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Flex>
    );
  });
});
