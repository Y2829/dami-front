import { render, screen } from "@testing-library/react";
import LabelCheckbox from "./index";

describe("Label Checkbox Component Test", () => {
  test("전달된 props에 맞게 렌더링이 되는지 테스트한다.", () => {
    const label = "파란색";
    const value = "Blue";
    const checked = false;
    const onChange = jest.fn();

    render(
      <LabelCheckbox
        label={label}
        value={value}
        checked={checked}
        onChange={onChange}
      />,
    );

    const checkbox = screen.getByRole("checkbox", { name: label });
    expect(checkbox).toBeInTheDocument();
  });
});
