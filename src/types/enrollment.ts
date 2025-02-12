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

export interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement;
}

export interface EnrollCalendarProps {
  openModal: () => void;
}

export type CalendarValuePiece = Date | null;
export type CalendarValue =
  | CalendarValuePiece
  | [CalendarValuePiece, CalendarValuePiece];
