import type { Position } from "./index";
import { render, screen } from "@testing-library/react";

import PositionCheck from "./index";

describe("Position Check Component Test", () => {
  test("체크할 수 있는 포지션은 5개다.", () => {
    const checkedValues = new Set<Position>();
    const handleCheck = jest.fn();
    render(
      <PositionCheck checkedValues={checkedValues} onCheck={handleCheck} />,
    );

    const checkboxList = screen.getAllByRole("checkbox");
    expect(checkboxList).toHaveLength(5);
  });
});
