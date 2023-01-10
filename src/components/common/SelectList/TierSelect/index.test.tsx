import { render, screen } from "@testing-library/react";

import TierSelect from "./index";

describe("Tier Select Component Test", () => {
  test("초기 선택된 티어는 없다.", () => {
    const value = null;
    const onSelect = jest.fn();

    render(<TierSelect value={value} onSelect={onSelect} />);

    const select = screen.getByDisplayValue("");
    expect(select).toBeInTheDocument();
  });
});
