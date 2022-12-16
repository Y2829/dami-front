import { render, screen, fireEvent } from "@testing-library/react";

import SortTypeSelect from "./index";

describe("Sort Type Select Component Test", () => {
  const onSelect = jest.fn();
  test("초기 선택된 정렬 타입은 추천순이다.", () => {
    render(<SortTypeSelect onSelect={onSelect} />);

    const select = screen.getByDisplayValue("추천순");
    expect(select).toBeInTheDocument();
  });

  test("추천순에서 다른 정렬로 변경할 수 있다.", () => {
    render(<SortTypeSelect onSelect={onSelect} />);

    const select = screen.getByDisplayValue("추천순");

    fireEvent.change(select, { target: { value: "평점순" } });
    expect((select as HTMLInputElement).value).toBe("평점순");
  });
});
