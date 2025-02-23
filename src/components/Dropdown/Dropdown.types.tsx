export interface DropdownProps {
  options: string[];
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}
