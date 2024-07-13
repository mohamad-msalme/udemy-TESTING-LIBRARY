import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("SummaryForm Component", () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const confirmOrderBtn = screen.getByRole("button", { name: /confirm/i });
  const agreeCheckBox = screen.getByRole("checkbox", { name: /i agree/i });
  const termsAndConditionText = screen.getByText(/terms and/i);

  test("Initial conditions", () => {
    expect(agreeCheckBox).not.toBeChecked();
    expect(confirmOrderBtn).toBeDisabled();
  });

  test("popover responds to hove", async () => {
    const hiddenPopover = screen.queryByText(/no ice cream/i);

    expect(hiddenPopover).not.toBeInTheDocument();

    await user.hover(termsAndConditionText);

    const popover = screen.getByText(/no ice cream/i);

    expect(popover).toBeInTheDocument();

    await user.unhover(termsAndConditionText);

    expect(hiddenPopover).not.toBeInTheDocument();
  });

  test("Checkbox enables button on first click and disables on second click", async () => {
    await user.click(agreeCheckBox);

    expect(agreeCheckBox).toBeChecked();
    expect(confirmOrderBtn).toBeEnabled();

    await user.click(agreeCheckBox);
    expect(agreeCheckBox).not.toBeChecked();
    expect(confirmOrderBtn).toBeDisabled();
  });
});
