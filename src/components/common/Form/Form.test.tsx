import React from "react";
import Form from "./Form";
import { render } from "@testing-library/react";

describe("Form", () => {
  test("renders Form component", () => {
    render(
      <Form
        isValidForm={true}
        onSubmit={() => {}}
        maxWidth="400px"
        submitButton={{ value: "שמור", backgroundColor: "blue" }}
      >
        Test
      </Form>
    );
  });
});
