import { render, fireEvent } from "@testing-library/react";

import LabelCheckbox from "./index";

describe("LabelCheckbox Component Test", () => {
  const label = "남성";
  const value = "MALE";
  const onChange = jest.fn();

  it("rendering test", () => {
    render(<LabelCheckbox label={label} value={value} onChane={onChange} />);
  });

  it("checkbox click event", () => {
    const { getByLabelText } = render(
      <LabelCheckbox label={label} value={value} onChane={onChange} />,
    );

    const checkbox = getByLabelText("남성");
    fireEvent.change(checkbox, { target: { checked: true } });
    expect((checkbox as HTMLInputElement).checked).toBeTruthy();
  });
});
