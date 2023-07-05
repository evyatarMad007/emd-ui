import React from "react";
import SelectInput from "./SelectInput";
import { render } from "@testing-library/react";

describe("SelectInput", () => {
  test("renders SelectInput component", () => {
    render(
      <SelectInput
        options={[
          { label: "1", value: "test 1" },
          { label: "2", value: "test 2" },
          { label: "3", value: "test 3" },
        ]}
        label="test"
        defaultValue="default value"
      />
    );
  });
});
