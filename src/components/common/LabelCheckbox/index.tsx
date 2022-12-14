import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

interface LabelCheckboxProps<T> {
  label: string;
  value: T;
  checked: boolean;
  onChange: (value: T) => void;
}

export default function LabelCheckbox<T>({
  label,
  value,
  checked,
  onChange,
}: LabelCheckboxProps<T>) {
  return (
    <FormGroup>
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            value={value}
            checked={checked}
            onClick={() => onChange(value)}
          />
        }
      />
    </FormGroup>
  );
}
