import { render, fireEvent } from "@testing-library/react";

import Select from "./index";

type MenuItem = { id: number; value: string; name: string };

describe("Select Component Test", () => {
  const label = "색상";
  const menuItems: Array<MenuItem> = [
    { id: 1, value: "Red", name: "빨간색" },
    { id: 2, value: "Green", name: "초록색" },
    { id: 3, value: "Blue", name: "파란색" },
  ];
  const handleChange = jest.fn();

  it("rendering test", () => {
    render(
      <Select label={label} menuItems={menuItems} onChange={handleChange} />,
    );
  });

  it("select change test", () => {
    const { getByDisplayValue } = render(
      <Select label={label} menuItems={menuItems} onChange={handleChange} />,
    );
    const select = getByDisplayValue("");
    fireEvent.change(select, { target: { value: "Red" } });
    expect((select as HTMLInputElement).value).toMatch("Red");

    fireEvent.change(select, { target: { value: "Green" } });
    expect((select as HTMLInputElement).value).toMatch("Green");
  });

  it("select default value test", () => {
    const { getByDisplayValue } = render(
      <Select
        label={label}
        menuItems={menuItems}
        defaultValue={"Blue"}
        onChange={handleChange}
      />,
    );

    const select = getByDisplayValue("Blue");
    expect((select as HTMLInputElement).value).toMatch("Blue");
  });
});
