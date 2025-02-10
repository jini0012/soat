export interface EnrollFormData {
  type: string;
  title: string;
  category: string;
  bookingStartDate: string;
  location: string;
}

export interface EnrollFormItemsProps extends EnrollFormData {
  onChange: (field: keyof EnrollFormData, value: string) => void;
}
