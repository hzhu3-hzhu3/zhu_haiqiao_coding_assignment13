export interface RadioButtonProps {
  label?: string;
  disabled?: boolean;
  name: string;  
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
