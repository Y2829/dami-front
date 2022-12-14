import { fireEvent, render, screen } from "@testing-library/react";

import PositionCheck from "./index";

describe("Position Check Component Test", () => {
  test("체크할 수 있는 포지션은 5개다.", () => {
    const handleCheck = jest.fn();
    render(<PositionCheck onCheck={handleCheck} />);

    const checkboxList = screen.getAllByRole("checkbox");
    expect(checkboxList).toHaveLength(5);
  });

  test("포지션은 중복으로 체크할 수 있다.", () => {
    const handleCheck = jest.fn();
    render(<PositionCheck onCheck={handleCheck} />);

    const checkboxList = screen.getAllByRole("checkbox");
    const topCheck = checkboxList[0];
    const jungleCheck = checkboxList[1];

    fireEvent.click(topCheck);
    fireEvent.click(jungleCheck);

    expect(topCheck).toBeChecked();
    expect(jungleCheck).toBeChecked();
  });
});
