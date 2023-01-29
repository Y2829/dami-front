import { render, screen, fireEvent } from "@testing-library/react";

import Select from "./index";

describe("Select Component Test", () => {
  const label = "색상";
  const menuItems = [
    { id: 1, value: "Red", name: "빨간색" },
    { id: 2, value: "Blue", name: "파란색" },
    { id: 3, value: "Green", name: "초록색" },
  ];

  test("초기 렌더링 테스트", () => {
    const value = "";
    const onChange = jest.fn();
    render(
      <Select
        label={label}
        value={value}
        menuItems={menuItems}
        onChange={onChange}
      />,
    );
  });

  test("Select 값 변경 사용자 테스트", () => {
    let value = "Red";
    const onChange = jest.fn((newValue) => (value = newValue));
    render(
      <Select
        label={label}
        value={value}
        menuItems={menuItems}
        onChange={onChange}
      />,
    );

    const select = screen.getByDisplayValue("Red");

    fireEvent.change(select, { target: { value: "Blue" } });
    expect(value).toMatch("Blue");
  });
});
