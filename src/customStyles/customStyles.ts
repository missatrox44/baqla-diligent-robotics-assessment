import { OptionState } from "../types/types";

const customStyles = {
  control: (base: object) => ({
    ...base,
    backgroundColor: '#1E1D2D',
    borderColor: '#1AA2B0',
    borderRadius: '6px',
    height: '60px',
    padding: '5px',
    color: '#1AA2B0',
    width: '600px'
  }),
  option: (base: object, state: OptionState) => ({
    ...base,
    backgroundColor: state.isSelected || state.isFocused ? '#1AA2B0' : '#1E1D2D',
    color: state.isSelected || state.isFocused ? '#1E1D2D' : '#1AA2B0',
    fontWeight: 'bold',
    lineHeight: '30px',
  }),
  singleValue: (base: object) => ({
    ...base,
    color: '#1AA2B0',
  }),
  menu: (base: object) => ({
    ...base,
    borderColor: '#1AA2B0',
    borderRadius: '6px',
    borderWidth: '1px',
    boxShadow: 'none',
    marginTop: '5px',
  }),
  menuList: (base: object) => ({
    ...base,
    overflowY: 'auto' as const,
    padding: 0,
    '&::-webkit-scrollbar': {
      width: 0,
      background: 'transparent',
    },
  }),
};

export default customStyles;
