import type { SelectChangeEvent } from "@mui/material/Select";

import { useState } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select as MuiSelect } from "@mui/material";

type SelectMenuItem<T> = { id: number; value: T; name: string };

interface SelectProps<T> {
  label: string;
  value: T | null;
  menuItems: Array<SelectMenuItem<T>>;
  onChange: (value: T) => void;
}

const Select = <T,>({ label, value, menuItems, onChange }: SelectProps<T>) => {
  const handleChange = (e: SelectChangeEvent) => {
    const selectedValue = e.target.value as T;
    onChange(selectedValue);
  };
  return (
    <Box
      sx={{
        width: 150,
      }}
    >
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <MuiSelect value={value ? `${value}` : ""} onChange={handleChange}>
          {menuItems.map((item) => (
            <MenuItem value={`${item.value}`} key={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};

export default Select;
