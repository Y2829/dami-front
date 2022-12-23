import { render, screen, fireEvent } from "@testing-library/react";

import SortTypeSelect from "./index";

describe("Sort Type Select Component Test", () => {
  test("초기 선택된 정렬 타입은 추천순이다.", () => {
    const value = "추천순";
    const onSelect = jest.fn();
    render(<SortTypeSelect value={value} onSelect={onSelect} />);

    const select = screen.getByDisplayValue("추천순");
    expect(select).toBeInTheDocument();
  });
});
