import { render, screen } from "@testing-library/react";
import LabelCheckbox from "./index";

describe("Label Checkbox Component Test", () => {
  const label = "빨간색";
  const value = "Red";
  test("초기 렌더링 테스트", () => {
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

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
});
