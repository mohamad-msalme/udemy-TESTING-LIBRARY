import { ColorBtn } from ".";
import { screen } from "@testing-library/react";
import { setup } from "../test-utils/setup";

test("Buton start with correct color", async () => {
  // render component
  const { user } = setup(<ColorBtn />);
  // get the btn elemnt
  const btnElement = screen.getByRole("button", { name: /blue/i });
  // assert has className called red
  expect(btnElement).toHaveClass("red");

  // click the button
  await user.click(btnElement);

  // assert btn content
  expect(btnElement).toHaveTextContent("red");

  // assert btn color
  expect(btnElement).toHaveClass("blue");
});
