import { screen } from "@testing-library/react";
import { CheckBox } from ".";
import { ColorBtn } from "../color-btn";
import { setup } from "../test-utils/setup";
import React from "react";

const TestComponent = () => {
  const [state, setState] = React.useState(false);

  return (
    <>
      <ColorBtn disabled={state} />
      <CheckBox checked={state} onChange={setState} />
    </>
  );
};
test("test checkbox with coloButton", async () => {
  const { user } = setup(<TestComponent />);

  const checkbox = screen.getByRole("checkbox");
  const btn = screen.getByRole("button");
  expect(btn).toBeEnabled();
  expect(checkbox).not.toBeChecked();

  await user.click(checkbox);

  expect(btn).toBeDisabled();
  expect(checkbox).toBeChecked();
});
