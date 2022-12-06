import type { ChangeEvent } from "react";
import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

type ChangeEventParms<T> = { value: T; checked: boolean };

interface LabelCheckboxProps<T> {
  label: string;
  value: T;
  onChane: ({ value, checked }: ChangeEventParms<T>) => void;
}

export default function LabelCheckbox<T>({
  label,
  value,
  onChane,
}: LabelCheckboxProps<T>) {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChane({ value, checked: e.target.checked });
  };
  return (
    <FormGroup>
      <FormControlLabel
        label={label}
        control={
          <Checkbox value={value} checked={checked} onChange={handleChange} />
        }
      />
    </FormGroup>
  );
}
