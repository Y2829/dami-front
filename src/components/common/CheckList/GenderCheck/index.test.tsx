import type { Gender } from "./index";
import { render, screen } from "@testing-library/react";

import GenderCheck from "./index";

describe("Gender Check Component Test", () => {
  test("성별은 남성과 여성에 대해 체크할 수 있다.", () => {
    const checkedValue = new Set<Gender>();
    const handleCheck = jest.fn();
    render(<GenderCheck checkedValue={checkedValue} onCheck={handleCheck} />);

    const checkboxes = screen.getAllByRole("checkbox", { name: /성$/ });
    expect(checkboxes).toHaveLength(2);
  });
});
