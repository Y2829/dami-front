import { fireEvent, render, screen } from "@testing-library/react";

import GenderCheck from "./index";

describe("Gender Check Component Test", () => {
  test("체크할 수 있는 성별은 2개다.", () => {
    const handleCheck = jest.fn();
    render(<GenderCheck onCheck={handleCheck} />);

    const genderCheckbox = screen.getAllByRole("checkbox");
    expect(genderCheckbox).toHaveLength(2);
  });

  test("성별은 중복으로 체크할 수 없다.", () => {
    const handleCheck = jest.fn();
    render(<GenderCheck onCheck={handleCheck} />);

    const genderCheck = screen.getAllByRole("checkbox");
    const [maleCheck, femaleCheck] = genderCheck;

    fireEvent.click(maleCheck);
    expect(maleCheck).toBeChecked();

    fireEvent.click(femaleCheck);
    expect(maleCheck).not.toBeChecked();
    expect(femaleCheck).toBeChecked();
  });
});
