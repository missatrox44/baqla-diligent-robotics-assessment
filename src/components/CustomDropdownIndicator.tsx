import { components, DropdownIndicatorProps } from 'react-select';

export const CustomDropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <div style={{ borderTop: '8px solid #1AA2B0', borderLeft: '8px solid transparent', borderRight: '8px solid transparent', height: 0, width: '16px' }}></div>
      </components.DropdownIndicator>
    )
  );
};
