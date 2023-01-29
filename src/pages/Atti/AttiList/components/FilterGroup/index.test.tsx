import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FilterGroup from "./index";

describe("AttiList Filter Group Component Test", () => {
  test("성별은 남성 또는 여성 중 한 개만 선택할 수 있다.", () => {
    render(<FilterGroup />);

    const checkboxes = screen.getAllByRole("checkbox", { name: /성$/ });

    const [maleCheck, femaleCheck] = checkboxes;

    fireEvent.click(maleCheck);
    expect(maleCheck).toBeChecked();

    fireEvent.click(femaleCheck);
    expect(maleCheck).not.toBeChecked();
    expect(femaleCheck).toBeChecked();
  });

  test("롤 포지션은 중복으로 선택이 가능하다.", () => {
    render(<FilterGroup />);

    const topCheck = screen.getByRole("checkbox", { name: "탑" });
    const midCheck = screen.getByRole("checkbox", { name: "미드" });

    fireEvent.click(topCheck);
    fireEvent.click(midCheck);

    expect(topCheck).toBeChecked();
    expect(midCheck).toBeChecked();
  });

  test("정렬 타입을 추천순에서 낮은가격순으로 선택한다.", () => {
    render(<FilterGroup />);

    const select = screen.getByDisplayValue("추천순");

    fireEvent.change(select, { target: { value: "낮은가격순" } });
    expect((select as HTMLInputElement).value).toBe("낮은가격순");
  });

  test("티어를 골드로 선택한다.", () => {
    render(<FilterGroup />);

    const select = screen.getByDisplayValue("");

    fireEvent.change(select, { target: { value: "GOLD" } });
    expect((select as HTMLInputElement).value).toBe("GOLD");
  });

  test("초기화버튼을 누르면 적용된 필터 상태가 초기화된다.", () => {
    render(<FilterGroup />);

    const sortTypeSelect = screen.getByDisplayValue("추천순");
    const tierSelect = screen.getByDisplayValue("");
    const maleCheck = screen.getByRole("checkbox", { name: "남성" });
    const positionTopCheck = screen.getByRole("checkbox", { name: "탑" });
    const positionMidCheck = screen.getByRole("checkbox", { name: "미드" });

    const resetButtn = screen.getByRole("button", { name: "초기화" });

    fireEvent.change(sortTypeSelect, { target: { value: "낮은가격순" } });
    fireEvent.change(tierSelect, { target: { value: "GOLD" } });
    fireEvent.click(maleCheck);
    fireEvent.click(positionTopCheck);
    fireEvent.click(positionMidCheck);

    expect((sortTypeSelect as HTMLInputElement).value).toBe("낮은가격순");
    expect((tierSelect as HTMLInputElement).value).toBe("GOLD");
    expect(maleCheck).toBeChecked();
    expect(positionTopCheck).toBeChecked();
    expect(positionMidCheck).toBeChecked();

    fireEvent.click(resetButtn);

    expect((sortTypeSelect as HTMLInputElement).value).toBe("추천순");
    expect((tierSelect as HTMLInputElement).value).toBe("");
    expect(maleCheck).not.toBeChecked();
    expect(positionTopCheck).not.toBeChecked();
    expect(positionMidCheck).not.toBeChecked();
  });
});
