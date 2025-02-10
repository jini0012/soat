export interface EnrollFormData {
  type: string;
  title: string;
  category: string;
  bookingStartDate: string;
  location: string;
  poster: File | null;
}

export interface EnrollPosterProps {
  onPosterChange: (value: File | null) => void;
}

export interface EnrollFormItemsProps extends Omit<EnrollFormData, "poster"> {
  onChange: (field: keyof EnrollFormData, value: string) => void;
}
