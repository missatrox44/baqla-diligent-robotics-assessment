export interface Product {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  brand: string;
  price: number;
  description: string;
}

export interface ProductOption {
  value: number;
  label: string;
}

export interface OptionState {
  isSelected: boolean;
  isFocused: boolean;
}
