import { render, screen, fireEvent } from "@testing-library/react";

import TierSelect from "./index";

describe("Tier Select Component Test", () => {
  const onSelect = jest.fn();

  test("초기 선택된 티어는 없다.", () => {
    render(<TierSelect onSelect={onSelect} />);

    const select = screen.getByDisplayValue("");
    expect(select).toBeInTheDocument();
  });

  test("티어를 실버로 선택한다.", () => {
    render(<TierSelect onSelect={onSelect} />);

    const select = screen.getByDisplayValue("");

    fireEvent.change(select, { target: { value: "SILVER" } });
    expect((select as HTMLInputElement).value).toBe("SILVER");
  });
});
